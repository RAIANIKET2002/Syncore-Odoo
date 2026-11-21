import { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { validateContactForm } from '../utils/validation';
import { submitContactForm } from '../services/contactService';
import styles from './ContactForm.module.css';

const industries = [
  'Manufacturing', 'Retail & POS', 'Trading & Distribution', 'Agriculture',
  'Healthcare', 'Education', 'IT & Technology', 'Hospitality', 'Construction',
  'Professional Services', 'FMCG', 'Logistics', 'Other'
];

const states = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal', 'Other'
];

const ContactForm = ({ variant = 'hero' }) => {
  const [form, setForm] = useState({
    firstName: '', surname: '', industry: '', mobile: '',
    email: '', employeeStrength: '', state: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [formErrors, setFormErrors] = useState({});
  const [globalError, setGlobalError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear field-specific error when user starts typing
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContactForm(form);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setStatus('loading');
    setGlobalError('');
    setFormErrors({});

    try {
      await submitContactForm(form);
      setStatus('success');
      setForm({
        firstName: '', surname: '', industry: '', mobile: '',
        email: '', employeeStrength: '', state: ''
      });
    } catch (error) {
      setStatus('error');
      setGlobalError(error.message);
    }
  };

  return (
    <div className={`${styles.formCard} ${variant === 'page' ? styles.formCardPage : ''}`}>
      <div className={styles.glowBg}></div>
      <div className={styles.formHeader}>
        <div className={styles.headerBadge}>🚀 Talk to an Odoo Expert</div>
        <h3 className={styles.formTitle}>Book a Free Consultation</h3>
        <p className={styles.formDesc}>Get implementation guidance, module recommendations, migration planning, and project cost estimates.</p>
      </div>
      
      {status === 'success' ? (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <CheckCircle size={48} color="var(--color-green-500)" style={{ margin: '0 auto 1rem auto' }} />
          <h4 style={{ color: 'var(--color-gray-800)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Thank You!</h4>
          <p style={{ color: 'var(--color-gray-600)' }}>Your message has been sent successfully. We will get back to you shortly.</p>
          <button 
            type="button" 
            className={styles.submitBtn} 
            style={{ marginTop: '1.5rem', width: 'auto', padding: '0.5rem 2rem' }}
            onClick={() => setStatus('idle')}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          {globalError && (
            <div style={{ padding: '0.75rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '4px', marginBottom: '1rem', fontSize: '0.875rem' }}>
              {globalError}
            </div>
          )}
        {/* Row 1: First Name + Surname */}
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName" className={styles.label}>First Name *</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              autoComplete="given-name"
              aria-required="true"
              aria-invalid={!!formErrors.firstName}
              aria-describedby={formErrors.firstName ? "firstName-error" : undefined}
              value={form.firstName}
              onChange={handleChange}
              className={styles.input}
              placeholder="John"
              disabled={status === 'loading'}
            />
            {formErrors.firstName && <span id="firstName-error" role="alert" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{formErrors.firstName}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="surname" className={styles.label}>Surname *</label>
            <input
              id="surname"
              type="text"
              name="surname"
              autoComplete="family-name"
              aria-required="true"
              aria-invalid={!!formErrors.surname}
              aria-describedby={formErrors.surname ? "surname-error" : undefined}
              value={form.surname}
              onChange={handleChange}
              className={styles.input}
              placeholder="Doe"
              disabled={status === 'loading'}
            />
            {formErrors.surname && <span id="surname-error" role="alert" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{formErrors.surname}</span>}
          </div>
        </div>

        {/* Row 2: Nature of Industry */}
        <div className={styles.inputGroup}>
          <label htmlFor="industry" className={styles.label}>Nature of Industry *</label>
          <select
            id="industry"
            name="industry"
            aria-required="true"
            aria-invalid={!!formErrors.industry}
            aria-describedby={formErrors.industry ? "industry-error" : undefined}
            value={form.industry}
            onChange={handleChange}
            className={styles.input}
            disabled={status === 'loading'}
          >
            <option value="">-- Select Industry --</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
          {formErrors.industry && <span id="industry-error" role="alert" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{formErrors.industry}</span>}
        </div>

        {/* Row 3: Mobile + Email */}
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label htmlFor="mobile" className={styles.label}>Mobile No. *</label>
            <input
              id="mobile"
              type="tel"
              name="mobile"
              autoComplete="tel"
              aria-required="true"
              aria-invalid={!!formErrors.mobile}
              aria-describedby={formErrors.mobile ? "mobile-error" : undefined}
              value={form.mobile}
              onChange={handleChange}
              className={styles.input}
              placeholder="+91 98765 43210"
              disabled={status === 'loading'}
            />
            {formErrors.mobile && <span id="mobile-error" role="alert" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{formErrors.mobile}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email ID *</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!formErrors.email}
              aria-describedby={formErrors.email ? "email-error" : undefined}
              value={form.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="john@company.com"
              disabled={status === 'loading'}
            />
            {formErrors.email && <span id="email-error" role="alert" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{formErrors.email}</span>}
          </div>
        </div>

        {/* Row 4: Employee Strength + State */}
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label htmlFor="employeeStrength" className={styles.label}>Employee Strength *</label>
            <select
              id="employeeStrength"
              name="employeeStrength"
              aria-required="true"
              aria-invalid={!!formErrors.employeeStrength}
              aria-describedby={formErrors.employeeStrength ? "employeeStrength-error" : undefined}
              value={form.employeeStrength}
              onChange={handleChange}
              className={styles.input}
              disabled={status === 'loading'}
            >
              <option value="">-- Select Range --</option>
              <option value="1-10">1 – 10</option>
              <option value="11-50">11 – 50</option>
              <option value="51-200">51 – 200</option>
              <option value="201-500">201 – 500</option>
              <option value="500+">500+</option>
            </select>
            {formErrors.employeeStrength && <span id="employeeStrength-error" role="alert" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{formErrors.employeeStrength}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="state" className={styles.label}>State *</label>
            <select
              id="state"
              name="state"
              aria-required="true"
              aria-invalid={!!formErrors.state}
              aria-describedby={formErrors.state ? "state-error" : undefined}
              value={form.state}
              onChange={handleChange}
              className={styles.input}
              disabled={status === 'loading'}
            >
              <option value="">-- Select State --</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {formErrors.state && <span id="state-error" role="alert" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{formErrors.state}</span>}
          </div>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>Sending... <Loader2 size={17} className="spin" style={{ animation: 'spin 1s linear infinite' }} /></>
          ) : (
            <>Send Message <Send size={17} /></>
          )}
        </button>
      </form>
      )}
    </div>
  );
};

export default ContactForm;
