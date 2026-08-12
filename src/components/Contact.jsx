import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const serviceOptions = [
  { value: '', label: 'Select a Service' },
  { value: 'hair-styling', label: 'Hair Styling' },
  { value: 'hair-colour', label: 'Hair Colour' },
  { value: 'facial-skincare', label: 'Facial & Skincare' },
  { value: 'bridal-makeup', label: 'Bridal Makeup' },
  { value: 'manicure-pedicure', label: 'Manicure & Pedicure' },
  { value: 'brows-lashes', label: 'Brows & Lashes' },
];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  service: '',
  preferredDate: '',
  notes: '',
};

const initialErrors = {
  fullName: '',
  email: '',
  phone: '',
  service: '',
};

function isValidPhone(value) {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15;
}

function validate(fields) {
  const errors = { fullName: '', email: '', phone: '', service: '' };
  if (!fields.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }
  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!isValidPhone(fields.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!fields.service) {
    errors.service = 'Please select a service.';
  }
  return errors;
}

function hasErrors(errors) {
  return Object.values(errors).some((e) => e !== '');
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (hasErrors(newErrors)) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors(initialErrors);
    setSubmitted(false);
  };

  const labelClass =
    'block font-sans text-[0.75rem] font-500 tracking-[0.08em] uppercase text-[#6B5B4E]';
  const inputClass =
    'w-full min-w-0 min-h-[2.75rem] bg-[#FAF7F2] border border-[#E8DDD0] px-4 py-3 font-sans text-[0.875rem] leading-normal text-[#2C1810] placeholder-[#C5B5A8] focus:outline-none focus:border-[#C9A96E] transition-colors duration-200';
  const errorClass = 'font-sans text-[0.75rem] text-[#8B4545]';

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23C9A96E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem center',
    paddingRight: '2.5rem',
  };

  return (
    <section
      id="contact"
      className="section-padding bg-[#FAF7F2] overflow-x-clip"
      style={{ paddingTop: '2.75rem', paddingBottom: '3rem' }}
      aria-labelledby="contact-heading"
    >
      <div className="site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-start min-w-0">

          {/* Left — Contact Info */}
          <div className="min-w-0 flex flex-col gap-6 md:gap-7">
            <div className="flex flex-col gap-4 md:gap-5">
              <div className="flex w-full items-center justify-center gap-3">
                <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
                <span className="eyebrow">Get In Touch</span>
                <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
              </div>
              <h2
                id="contact-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] text-[#2C1810] text-pretty"
              >
                Visit Lumière
              </h2>
              <p className="font-sans text-[0.9375rem] md:text-base leading-[1.75] text-[#6B5B4E] text-pretty">
                We look forward to welcoming you to our studio. Whether it is your first visit or you are returning, every appointment is treated with the same care and attention.
              </p>
            </div>

            <div className="gold-divider" aria-hidden="true" />

            <address className="not-italic flex flex-col gap-5">
              <div className="flex items-start gap-4 min-w-0">
                <div
                  className="flex items-center justify-center w-10 h-10 min-w-10 min-h-10 border border-[#E8DDD0] shrink-0"
                  aria-hidden="true"
                >
                  <MapPin size={16} strokeWidth={1.5} className="text-[#C9A96E]" />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                  <p className="font-sans text-[0.875rem] font-500 text-[#2C1810]">
                    Lumière Beauty Studio
                  </p>
                  <p className="font-sans text-[0.875rem] text-[#6B5B4E]">Sydney, NSW, Australia</p>
                </div>
              </div>

              <div className="flex items-start gap-4 min-w-0">
                <div
                  className="flex items-center justify-center w-10 h-10 min-w-10 min-h-10 border border-[#E8DDD0] shrink-0"
                  aria-hidden="true"
                >
                  <Phone size={16} strokeWidth={1.5} className="text-[#C9A96E]" />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                  <p className="font-sans text-[0.75rem] text-[#9A8A7D] tracking-wide uppercase">
                    Phone
                  </p>
                  <a
                    href="tel:+61280001234"
                    className="font-sans text-[0.875rem] text-[#2C1810] hover:text-[#C9A96E] transition-colors duration-200"
                  >
                    02 8000 1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 min-w-0">
                <div
                  className="flex items-center justify-center w-10 h-10 min-w-10 min-h-10 border border-[#E8DDD0] shrink-0"
                  aria-hidden="true"
                >
                  <Mail size={16} strokeWidth={1.5} className="text-[#C9A96E]" />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                  <p className="font-sans text-[0.75rem] text-[#9A8A7D] tracking-wide uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:hello@lumierebeauty.studio"
                    className="font-sans text-[0.875rem] text-[#2C1810] hover:text-[#C9A96E] transition-colors duration-200 break-all"
                  >
                    hello@lumierebeauty.studio
                  </a>
                </div>
              </div>
            </address>

            <div
              className="bg-[#FEFCF9] border border-[#E8DDD0] flex flex-col gap-4"
              style={{ padding: '1.25rem' }}
            >
              <div className="flex items-center gap-3">
                <Clock size={15} strokeWidth={1.5} className="text-[#C9A96E] shrink-0" aria-hidden="true" />
                <span className="eyebrow text-[0.625rem]">Opening Hours</span>
              </div>
              <dl className="flex flex-col gap-3">
                <div className="flex justify-between items-baseline gap-4 border-b border-[#E8DDD0] pb-3">
                  <dt className="font-sans text-[0.8125rem] text-[#6B5B4E]">Mon – Fri</dt>
                  <dd className="font-sans text-[0.8125rem] text-[#2C1810] font-500 text-right shrink-0">
                    9:00 AM – 8:00 PM
                  </dd>
                </div>
                <div className="flex justify-between items-baseline gap-4 border-b border-[#E8DDD0] pb-3">
                  <dt className="font-sans text-[0.8125rem] text-[#6B5B4E]">Saturday</dt>
                  <dd className="font-sans text-[0.8125rem] text-[#2C1810] font-500 text-right shrink-0">
                    9:00 AM – 6:00 PM
                  </dd>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <dt className="font-sans text-[0.8125rem] text-[#6B5B4E]">Sunday</dt>
                  <dd className="font-sans text-[0.8125rem] text-[#9A8A7D] text-right shrink-0">
                    Closed
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right — Appointment Form */}
          <div className="min-w-0 w-full flex flex-col gap-5 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-5">
              <div className="flex w-full items-center justify-center gap-3">
                <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
                <span className="eyebrow">Appointments</span>
                <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
              </div>
              <h3
                id="appointment-form"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] text-[#2C1810] text-pretty"
              >
                Request an Appointment
              </h3>
            </div>

            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center border border-[#E8DDD0] bg-[#FEFCF9] gap-6"
                style={{ padding: '2.5rem 1.75rem' }}
                role="alert"
                aria-live="polite"
              >
                <div className="w-14 h-14 border border-[#C9A96E] flex items-center justify-center shrink-0">
                  <span className="text-[#C9A96E] text-2xl font-serif" aria-hidden="true">
                    ✓
                  </span>
                </div>
                <div className="flex flex-col gap-3 max-w-sm">
                  <h4 className="font-serif text-xl font-medium text-[#2C1810]">Thank You</h4>
                  <p className="font-sans text-[0.9375rem] leading-[1.75] text-[#6B5B4E] text-pretty">
                    Thank you. Your appointment request has been received. We will be in touch
                    shortly.
                  </p>
                </div>
                <button onClick={handleReset} className="btn-outline" type="button">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Appointment request form"
                className="form-panel w-full min-w-0 bg-[#FEFCF9] border border-[#E8DDD0]"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="fullName" className={labelClass}>
                      Full Name <span className="text-[#C9A96E]" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                      aria-required="true"
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      aria-invalid={!!errors.fullName}
                      autoComplete="name"
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className={errorClass} role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
                    <div className="flex flex-col gap-3 min-w-0">
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-[#C9A96E]" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p id="email-error" className={errorClass} role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 min-w-0">
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number <span className="text-[#C9A96E]" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="04XX XXX XXX"
                        className={inputClass}
                        aria-required="true"
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        aria-invalid={!!errors.phone}
                        autoComplete="tel"
                      />
                      {errors.phone && (
                        <p id="phone-error" className={errorClass} role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 min-w-0">
                    <label htmlFor="service" className={labelClass}>
                      Service <span className="text-[#C9A96E]" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer appearance-none`}
                      aria-required="true"
                      aria-describedby={errors.service ? 'service-error' : undefined}
                      aria-invalid={!!errors.service}
                      style={selectStyle}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className={errorClass} role="alert">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 min-w-0">
                    <label htmlFor="preferredDate" className={labelClass}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={form.preferredDate}
                      onChange={handleChange}
                      className={`${inputClass} max-w-full`}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="flex flex-col gap-3 min-w-0">
                    <label htmlFor="notes" className={labelClass}>
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Any specific requests or information you would like us to know..."
                      rows={4}
                      className={`${inputClass} resize-none min-h-[6.5rem]`}
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <button
                      type="submit"
                      id="appointment-submit-btn"
                      className="btn-primary w-full justify-center"
                    >
                      Request Appointment
                    </button>
                    <p className="font-sans text-[0.7rem] text-[#9A8A7D] text-center leading-relaxed sr-only">
                      This is a demonstration form. No data is submitted to a server.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
