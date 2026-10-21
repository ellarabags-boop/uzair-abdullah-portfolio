import { profile } from '../config.js';
import { Button } from './ui.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Available for mern stack development projects</p>
          <h1 id="hero-title">Hi, I'm <span className="gold">{profile.name}</span></h1>
          <p className="headline">{profile.role}</p>
          <p className="lead">
            I build clean, responsive web interfaces with React and the MERN stack. Coming from a technical drawing background, I bring precision and attention to detail into every component I write.
          </p>
          <div className="actions">
            <Button href="#project">View My Projects</Button>
            <Button href={profile.cv} variant="ghost" download>Download CV</Button>
            <Button href="#contact" variant="ghost">Contact Me</Button>
          </div>
          <p className="loc">📍 {profile.location}</p>
        </div>
        <div className="hero-photo">
          <div className="frame">
            <img src="/images/uzair.webp" width="640" height="960" alt="Portrait of Uzair Abdullah" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
