import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "1b7afd80-f3f5-4658-b18f-ca3ab3538092");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message Sent Successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        console.log("Error", data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      setResult("❌ An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title reveal">{t.contactTitle}</h2>
        
        <div className="contact-container glass reveal">
          <div className="contact-info">
            <h3>{t.contactSubtitle}</h3>
            <p>{t.contactDesc}</p>
            
            <div className="contact-links">
              <a href="https://wa.me/60103796742" target="_blank" rel="noopener noreferrer" className="contact-phone">
                <Phone className="contact-icon" />
                <p><strong>{t.contactBtnWa}:</strong><br/>+60 10-379 6742</p>
              </a>
              <div className="contact-email">
                <Mail className="contact-icon" />
                <p><strong>irfanizzani46@gmail.com</strong></p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label>{t.contactFormName}</label>
              <input type="text" name="name" required placeholder={t.contactFormNamePlaceholder} />
            </div>
            <div className="form-group">
              <label>{t.contactFormEmail}</label>
              <input type="email" name="email" required placeholder={t.contactFormEmailPlaceholder} />
            </div>
            <div className="form-group">
              <label>{t.contactFormDetails}</label>
              <textarea name="message" rows="4" required placeholder={t.contactFormDetailsPlaceholder}></textarea>
            </div>
            <button type="submit" className="btn btn-secondary submit-btn">
              <Send size={18} /> {t.contactSubmitBtn}
            </button>
            {result && <p style={{marginTop: '1rem', textAlign: 'center', fontWeight: '500'}}>{result}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
