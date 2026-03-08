/**
 * Valentín Protección Integral - Security Engine
 * Implements Rate Limiting, Circuit Breakers, and IP Blacklisting
 */

interface SecurityState {
  requests: Record<string, { count: number; lastReset: number }>;
  blacklist: Set<string>;
  circuitBreaker: {
    failures: number;
    lastFailure: number;
    state: 'CLOSED' | 'OPEN' | 'HALF-OPEN';
  };
}

// In-memory state (Note: For production at scale, use Redis/Cloudflare KV)
const state: SecurityState = {
  requests: {},
  blacklist: new Set(),
  circuitBreaker: {
    failures: 0,
    lastFailure: 0,
    state: 'CLOSED',
  },
};

const RATE_LIMIT = 20; // requests per window
const WINDOW_MS = 1000; // 1 second
const BLACKLIST_THRESHOLD = 100; // persistent offender threshold
const CIRCUIT_BREAKER_THRESHOLD = 5;
const CIRCUIT_BREAKER_TIMEOUT = 30000; // 30 seconds

export async function checkSecurity(ip: string): Promise<{
  allowed: boolean;
  reason?: string;
  status: number;
}> {
  // 1. Check IP Blacklist
  if (state.blacklist.has(ip)) {
    return { allowed: false, reason: 'IP_BLACKLISTED', status: 403 };
  }

  // 2. Check Circuit Breaker
  if (state.circuitBreaker.state === 'OPEN') {
    const now = Date.now();
    if (now - state.circuitBreaker.lastFailure > CIRCUIT_BREAKER_TIMEOUT) {
      state.circuitBreaker.state = 'HALF-OPEN';
    } else {
      return { allowed: false, reason: 'SERVICE_TEMPORARILY_UNAVAILABLE', status: 503 };
    }
  }

  // 3. Rate Limiting Logic
  const now = Date.now();
  if (!state.requests[ip]) {
    state.requests[ip] = { count: 1, lastReset: now };
  } else {
    const record = state.requests[ip];
    if (now - record.lastReset > WINDOW_MS) {
      record.count = 1;
      record.lastReset = now;
    } else {
      record.count++;
    }

    if (record.count > RATE_LIMIT) {
      if (record.count > BLACKLIST_THRESHOLD) {
        state.blacklist.add(ip);
        return { allowed: false, reason: 'IP_BLACKLISTED_FOR_ABUSE', status: 403 };
      }
      return { allowed: false, reason: 'TOO_MANY_REQUESTS', status: 429 };
    }
  }

  return { allowed: true, status: 200 };
}

export function reportFailure() {
  state.circuitBreaker.failures++;
  state.circuitBreaker.lastFailure = Date.now();
  if (state.circuitBreaker.failures >= CIRCUIT_BREAKER_THRESHOLD) {
    state.circuitBreaker.state = 'OPEN';
  }
}

export function reportSuccess() {
  state.circuitBreaker.failures = 0;
  state.circuitBreaker.state = 'CLOSED';
}
