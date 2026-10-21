import Reveal from './Reveal.jsx';

export function Button({ href, variant = 'primary', external, download, children }) {
  const cls = `btn btn-${variant}`;
  if (!href) {
    return <span className={`${cls} is-disabled`} role="link" aria-disabled="true" title="This link will be added soon">{children}</span>;
  }
  return (
    <a className={cls} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...(download ? { download: '' } : {})}>
      {children}
    </a>
  );
}

export function Section({ id, eyebrow, title, intro, children, alt }) {
  return (
    <section id={id} className={`section ${alt ? 'alt' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
