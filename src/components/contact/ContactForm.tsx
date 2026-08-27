'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContact, type ContactState } from '@/app/contact/actions';
import styles from './ContactForm.module.css';

const initialState: ContactState = { status: 'idle' };

function SubmitButton() {
  // useFormStatus must live in a CHILD of the form to read its pending state.
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.submit} disabled={pending}>
      {pending ? 'Sending…' : 'Submit'}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className={styles.form} noValidate>
      {/* role="status" announces success/error to screen readers without
          stealing focus. aria-live="polite" waits for a pause in speech. */}
      <p role="status" aria-live="polite" className={styles.status}>
        {state.status === 'success'
          ? 'Thanks — we have your message and will be in touch.'
          : state.message}
      </p>

      <Field
        name="name"
        label="Full name"
        required
        autoComplete="name"
        error={state.errors?.name}
      />
      <Field name="company" label="Company" autoComplete="organization" />
      <Field
        name="email"
        label="Email"
        type="email"
        required
        autoComplete="email"
        error={state.errors?.email}
      />
      <Field
        name="phone"
        label="Phone"
        type="tel"
        required
        autoComplete="tel"
        error={state.errors?.phone}
      />

      <div className={styles.field}>
        <label htmlFor="details">Project details</label>
        <textarea id="details" name="details" rows={5} className={styles.input} />
      </div>

      {/* Honeypot. Hidden from sight and from assistive tech; bots still fill it. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton />
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required = false,
  autoComplete,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div className={styles.field}>
      {/* htmlFor + id is a real label association. Placeholder text is NOT a
          label — it vanishes on focus and screen readers may skip it. */}
      <label htmlFor={name}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={styles.input}
      />
      {error ? (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
