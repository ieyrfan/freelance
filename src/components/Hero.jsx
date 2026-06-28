import { MessageCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="container hero-content animate-fade-in">
        <div className="hero-text">
          <p className="greeting">{t.heroGreeting}</p>
          <h1 className="name">{t.heroTitlePart1}<span>{t.heroTitlePart2}</span>{t.heroTitlePart3}<span>{t.heroTitlePart4}</span>{t.heroTitleSuffix || ''}</h1>
          <h2 className="title">{t.heroSubtitle}</h2>
          <p className="description">
            {t.heroDesc}
          </p>
          
          <div className="hero-cta">
            <a href="https://wa.me/60103796742" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={18} /> {t.heroBtnPrimary}
            </a>
            <a href="https://irfanrizalv2.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {t.heroBtnSecondary} <ExternalLink size={18} style={{marginLeft: '0.5rem'}}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
