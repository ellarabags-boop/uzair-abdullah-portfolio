import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import { About, Skills, Project, Education, Experience, Profiles } from './components/Sections.jsx';
import Contact from './components/Contact.jsx';
import { profile } from './config.js';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><About /><Skills /><Project /><Education /><Experience /><Profiles /><Contact />
      </main>
      <footer className="footer"><div className="container">© {new Date().getFullYear()} {profile.name}. Built with React and Vite.</div></footer>
    </>
  );
}
