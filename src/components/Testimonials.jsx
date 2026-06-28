import { MessageSquareQuote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Testimonials.css';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.testi1Name,
      role: t.testi1Role,
      text: t.testi1Text
    },
    {
      name: t.testi2Name,
      role: t.testi2Role,
      text: t.testi2Text
    },
    {
      name: t.testi3Name,
      role: t.testi3Role,
      text: t.testi3Text
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title reveal">{t.testiTitle}</h2>
        <div className="grid-3">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="testi-card glass reveal" style={{transitionDelay: `${idx * 0.1}s`}}>
              <MessageSquareQuote size={40} className="testi-icon" />
              <p className="testi-text">"{testi.text}"</p>
              <div className="testi-author">
                <h4>{testi.name}</h4>
                <p>{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
