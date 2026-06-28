import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Projects from './Projects';
import About from './About';
import Certifications from './Certifications';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';
import LiveChat from './LiveChat';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LandingPage = () => {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <About />
        <Certifications />
        <FAQ />
        <Contact />
      </main>
      <footer className="footer glass">
        <div className="container">
          <p>{t.footerText}</p>
        </div>
      </footer>
      <LiveChat />
    </div>
  );
};

export default LandingPage;
