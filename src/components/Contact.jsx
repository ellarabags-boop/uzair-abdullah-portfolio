import { useRef, useState } from 'react';
import { profile } from '../config.js';
import Reveal from './Reveal.jsx';
import { Section } from './ui.jsx';

const empty = { name: '', email: '', message: '', 'bot-field': '' };
const validate = (v) => {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (v.message.trim().length < 10) e.message = 'Your message should be at least 10 characters.';
  return e;
};

export default function Contact() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);
  const change = (e) => { setV({ ...v, [e.target.name]: e.target.value }); if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' }); };

  const submit = async (e) => {
    e.preventDefault();
    const er = validate(v);
    setErrors(er);
    const first = Object.keys(er)[0];
    if (first) { formRef.current.elements[first].focus(); return; }
    setStatus('sending');
    try {
      const body = new URLSearchParams({ 'form-name': 'contact', ...v }).toString();
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success'); setV(empty);
    } catch { setStatus('error'); }
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {props.area
        ? <textarea id={name} name={name} rows="5" value={v[name]} onChange={change} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} />
        : <input id={name} name={name} type={props.type || 'text'} autoComplete={props.ac} value={v[name]} onChange={change} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} />}
      <p id={`${name}-err`} className="err" role="alert">{errors[name]}</p>
    </div>
  );

  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together" intro="Have an opportunity or a question? Send a message and I will get back to you.">
      <div className="contact-grid">
        <Reveal className="card info">
          <h3>Contact details</h3>
          <p><span className="muted">Email</span><br /><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p><span className="muted">Phone</span><br /><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a></p>
          <p><span className="muted">Location</span><br />{profile.location}</p>
        </Reveal>
        <Reveal className="card" delay={80}>
          <form ref={formRef} name="contact" method="POST" onSubmit={submit} noValidate>
            <p className="hp" aria-hidden="true"><label>Leave empty <input name="bot-field" tabIndex="-1" autoComplete="off" value={v['bot-field']} onChange={change} /></label></p>
            {field('name', 'Your name', { ac: 'name' })}
            {field('email', 'Your email', { type: 'email', ac: 'email' })}
            {field('message', 'Message', { area: true })}
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Message'}</button>
            <div aria-live="polite">
              {status === 'success' && <p className="notice ok" role="status">Thank you! Your message was sent successfully. I will reply soon.</p>}
              {status === 'error' && <p className="notice bad" role="alert">Sorry, your message could not be sent. Please try again or email me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>.</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
