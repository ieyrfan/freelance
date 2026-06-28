import { User, GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './WhyUs.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="whyus-section">
      <div className="container">
        <h2 className="section-title reveal">{t.aboutTitle}</h2>
        
        <div className="whyus-content reveal">
          <div className="whyus-text">
            <h3>{t.aboutSubtitle}</h3>
            <p>{t.aboutDesc}</p>
          </div>

          <div className="whyus-highlights">
            <div className="highlight-item glass">
              <User className="highlight-icon" />
              <div>
                <h4>{t.aboutItem1Title}</h4>
                <p>{t.aboutItem1Desc}</p>
              </div>
            </div>
            <div className="highlight-item glass">
              <GraduationCap className="highlight-icon" />
              <div>
                <h4>{t.aboutItem2Title}</h4>
                <p>{t.aboutItem2Desc}</p>
              </div>
            </div>
            <div className="highlight-item glass">
              <Award className="highlight-icon" />
              <div>
                <h4>{t.aboutItem3Title}</h4>
                <p>{t.aboutItem3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
