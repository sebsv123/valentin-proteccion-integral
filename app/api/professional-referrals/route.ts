import { NextResponse } from 'next/server';
import { z } from 'zod';

const referralSchema = z.object({
  professionalName: z.string().trim().min(2).max(120),
  organization: z.string().trim().min(2).max(160),
  professionalEmail: z.string().trim().email().max(180),
  clientName: z.string().trim().min(2).max(120),
  clientContact: z.string().trim().min(6).max(120),
  procedureType: z.string().trim().min(2).max(120),
  clientAuthorization: z.literal(true),
  sensitiveNotice: z.literal(true),
  website: z.string().max(0).optional().or(z.literal('')),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: 'Solicitud no válida.' }, { status: 400 });
  }

  const parsed = referralSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: 'Revisa los campos obligatorios.' }, { status: 422 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: true });
}
