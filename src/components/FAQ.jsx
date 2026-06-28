import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './FAQ.css';

const FAQ = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A }
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title reveal">{t.faqTitle}</h2>
        <div className="faq-container reveal">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                <ChevronDown className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`} size={24} />
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
