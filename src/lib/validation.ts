/**
 * Hand-rolled rather than pulling in zod. Five fields with simple rules do not
 * justify a dependency, and this keeps the install surface small. If the form
 * grows (conditional fields, nested data), swap this for zod — the shape of
 * `validateContact` is deliberately zod-like so the change stays local.
 */

export type ContactFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  details: string;
};

export type FieldErrors = Partial<Record<keyof ContactFields, string>>;

// Deliberately permissive. Over-strict email regexes reject valid addresses,
// which is a worse failure than accepting one that bounces.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(data: ContactFields): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name.trim()) errors.name = 'Please enter your full name.';
  if (!data.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (!data.phone.trim()) errors.phone = 'Please enter a phone number.';

  // Length caps: cheap protection against someone posting megabytes of text.
  if (data.name.length > 120) errors.name = 'That name is too long.';
  if (data.details.length > 5000) errors.details = 'Please keep this under 5000 characters.';

  return errors;
}
