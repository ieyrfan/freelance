import Navbar from './Navbar';
import Hero from './Hero';
import TechMarquee from './TechMarquee';
import Services from './Services';
import Pricing from './Pricing';
import Projects from './Projects';
import About from './About';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';
import LiveChat from './LiveChat';
import CustomCursor from './CustomCursor';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LandingPage = () => {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <div className="app-wrapper">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Pricing />
        <Projects />
        <Testimonials />
        <About />
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
