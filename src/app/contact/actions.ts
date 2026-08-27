'use server';

import { validateContact, type FieldErrors } from '@/lib/validation';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  errors?: FieldErrors;
};

/**
 * Server Action. Runs ONLY on the server — the function body is never sent to
 * the browser, so secrets read here cannot leak into the client bundle.
 *
 * Validation runs here regardless of any client-side checks. Client validation
 * is a convenience for the user, not a security boundary: anyone can POST
 * directly to this endpoint.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const fields = {
    name: String(formData.get('name') ?? ''),
    company: String(formData.get('company') ?? ''),
    email: String(formData.get('email') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    details: String(formData.get('details') ?? ''),
  };

  // Honeypot: a field hidden from humans. Bots fill every input they find, so
  // a non-empty value means automation. Return success so the bot isn't told
  // it was detected.
  if (String(formData.get('website') ?? '')) {
    return { status: 'success' };
  }

  const errors = validateContact(fields);
  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please check the highlighted fields.', errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  // NOT wired to a provider. Failing loudly beats pretending the message sent
  // and silently dropping a real enquiry.
  if (!apiKey || !to) {
    return {
      status: 'error',
      message:
        'Email delivery is not configured yet. Set RESEND_API_KEY and CONTACT_TO_EMAIL in .env.local.',
    };
  }

  // TODO: send via provider once credentials exist.
  return { status: 'success' };
}
