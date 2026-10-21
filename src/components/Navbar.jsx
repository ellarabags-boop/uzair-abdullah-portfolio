import { useEffect, useState } from 'react';
import { profile } from '../config.js';

const items = [['about', 'About'], ['skills', 'Skills'], ['project', 'Project'], ['education', 'Education'], ['experience', 'Experience'], ['profiles', 'Profiles'], ['contact', 'Contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
    }, { rootMargin: '-45% 0px -50% 0px' });
    items.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); io.disconnect(); };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>UA<span>.</span></a>
        <button className="burger" aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="menu" aria-label="Main navigation" className={open ? 'open' : ''}>
          <ul>
            {items.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary nav-cta" href={`mailto:${profile.email}`}>Hire Me</a>
        </nav>
      </div>
    </header>
  );
}
