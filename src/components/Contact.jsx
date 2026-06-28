import { Send, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title reveal">{t.contactTitle}</h2>
        
        <div className="contact-container glass reveal">
          <div className="contact-info">
            <h3>{t.contactSubtitle}</h3>
            <p>{t.contactDesc}</p>
            
            <div className="contact-details mt-4">
              <a href="https://wa.me/60103796742" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginBottom: '1rem', width: 'fit-content'}}>
                <MessageCircle size={20} /> {t.contactBtnWa}
              </a>
              <div className="contact-email">
                <Mail className="contact-icon" />
                <p><strong>irfanizzani46@gmail.com</strong></p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>{t.contactFormName}</label>
              <input type="text" placeholder={t.contactFormNamePlaceholder} required />
            </div>
            
            <div className="form-group">
              <label>{t.contactFormEmail}</label>
              <input type="email" placeholder={t.contactFormEmailPlaceholder} required />
            </div>
            
            <div className="form-group">
              <label>{t.contactFormDetails}</label>
              <textarea rows="5" placeholder={t.contactFormDetailsPlaceholder} required></textarea>
            </div>
            
            <button type="submit" className="btn btn-secondary submit-btn">
              <Send size={18} /> {t.contactSubmitBtn}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
