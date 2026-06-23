import { useState } from 'react';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    else if (form.name.trim().length < 2) errs.name = 'Name must be at least 2 characters.';

    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.';

    if (!form.subject.trim()) errs.subject = 'Subject is required.';
    else if (form.subject.trim().length < 5) errs.subject = 'Subject must be at least 5 characters.';

    if (!form.message.trim()) errs.message = 'Message is required.';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  if (status === 'success') {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon}><HiCheckCircle /></div>
        <h3 className={styles.successTitle}>Message Sent Successfully!</h3>
        <p className={styles.successText}>
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          className={`btn btn-primary ${styles.resetBtn}`}
          onClick={() => setStatus('idle')}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Full Name <span className={styles.required}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={[styles.input, errors.name ? styles.inputError : ''].join(' ')}
            aria-describedby={errors.name ? 'name-error' : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <span id="name-error" className={styles.error} role="alert">
              <HiExclamationCircle /> {errors.name}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email Address <span className={styles.required}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={[styles.input, errors.email ? styles.inputError : ''].join(' ')}
            aria-describedby={errors.email ? 'email-error' : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <span id="email-error" className={styles.error} role="alert">
              <HiExclamationCircle /> {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          Subject <span className={styles.required}>*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="How can we help you?"
          className={[styles.input, errors.subject ? styles.inputError : ''].join(' ')}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <span id="subject-error" className={styles.error} role="alert">
            <HiExclamationCircle /> {errors.subject}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project or question..."
          rows={6}
          className={[styles.textarea, errors.message ? styles.inputError : ''].join(' ')}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        <div className={styles.charCount}>
          {form.message.length} / 500 characters
        </div>
        {errors.message && (
          <span id="message-error" className={styles.error} role="alert">
            <HiExclamationCircle /> {errors.message}
          </span>
        )}
      </div>

      {status === 'error' && (
        <div className={styles.formError} role="alert">
          <HiExclamationCircle />
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        className={`btn btn-primary btn-lg ${styles.submitBtn}`}
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
