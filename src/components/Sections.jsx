import { profile, skills, extraSkills, project, education, experience } from '../config.js';
import Reveal from './Reveal.jsx';
import { Button, Section } from './ui.jsx';

export function About() {
  const points = [
    ['Frontend development', 'I enjoy turning designs into fast, accessible interfaces using HTML, CSS, JavaScript and React.'],
    ['Responsive interfaces', 'Every layout I build is planned mobile-first so it works well on phones, tablets and desktops.'],
    ['Problem-solving', 'Debugging and breaking problems into small steps is the part of development I enjoy most.'],
    ['Learning full-stack', 'I am growing into full-stack development with Node.js, Express.js, MongoDB and REST APIs.'],
  ];
  return (
    <Section id="about" eyebrow="About me" title="Detail-driven developer, drafting-trained mindset"
      intro="I am a MERN stack developer at Bano Qabil Institute in Abbottabad. Working daily as an AutoCAD draftsman taught me to value precision, structure and clear communication, and I apply the same habits to code. Languages: Urdu (native) and English (advanced).">
      <div className="grid g2">
        {points.map(([t, d], i) => (
          <Reveal key={t} delay={i * 70} className="card"><h3>{t}</h3><p className="muted">{d}</p></Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" alt eyebrow="Skills" title="Technologies I work with">
      <div className="grid g4">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 50} className="card skill">
            <span className="mark" aria-hidden="true">{s.mark}</span>
            <h3>{s.name}</h3><p className="muted">{s.text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="extra">
        <h3>Additional technical skills</h3>
        <ul className="chips">{extraSkills.map((s) => <li key={s}>{s}</li>)}</ul>
      </Reveal>
    </Section>
  );
}

export function Project() {
  return (
    <Section id="project" eyebrow="Featured project" title={project.name} intro={project.purpose}>
      <div className="project-grid">
        <Reveal className="card">
          <h3>Technology stack</h3>
          <ul className="chips">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          <h3>Implemented features</h3>
          <ul className="ticks">{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <p className="muted small"><strong>Deployment:</strong> {project.deploy}</p>
          <Button href={project.url} external>Visit Live Website ↗</Button>
        </Reveal>
        <div className="shots">
          {project.shots.map((s, i) => (
            <Reveal as="figure" key={s.src} delay={i * 90}>
              <img src={s.src} alt={s.alt} width="1200" height="720" loading="lazy" decoding="async" />
              <figcaption>{s.caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" alt eyebrow="Education" title="Education & training">
      <ol className="timeline">
        {education.map((e, i) => (
          <Reveal as="li" key={e.title} delay={i * 80}>
            <h3>{e.title}</h3>
            {e.place && <p>{e.place}</p>}
            <span className="tag">{e.note}</span>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional experience">
      <Reveal className="card exp">
        <div className="exp-top"><h3>{experience.role}</h3><span className="tag">{experience.period}</span></div>
        <p className="gold">{experience.company}</p>
        <ul className="ticks">{experience.points.map((p) => <li key={p}>{p}</li>)}</ul>
      </Reveal>
    </Section>
  );
}

export function Profiles() {
  return (
    <Section id="profiles" alt eyebrow="Online" title="Find me online" intro="Connect with me or follow my work on these platforms.">
      <Reveal className="actions center">
        <Button href={profile.links.github} external variant="ghost">GitHub{profile.links.github ? '' : ' (coming soon)'}</Button>
        <Button href={profile.links.linkedin} external>LinkedIn</Button>
      </Reveal>
    </Section>
  );
}
