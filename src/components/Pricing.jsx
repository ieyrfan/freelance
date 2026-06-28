import { useState } from 'react';
import { Check, Calculator } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Pricing.css';

const Pricing = () => {
  const { t } = useLanguage();
  
  const [features, setFeatures] = useState({
    pages: 1, // 1 for single page, 5 for multi page
    booking: false,
    domain: false,
    seo: false
  });

  const calculatePrice = () => {
    let basePrice = features.pages === 1 ? 500 : 1500;
    if (features.booking) basePrice += 800;
    if (features.domain) basePrice += 150;
    if (features.seo) basePrice += 300;
    return basePrice;
  };

  const toggleFeature = (feat) => {
    setFeatures(prev => ({ ...prev, [feat]: !prev[feat] }));
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="section-title reveal">{t.pricingTitle || "Project Estimator"}</h2>
        <p className="pricing-subtitle reveal" style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--text-body)'}}>
          {t.pricingDesc || "Customize your package and get an instant estimated price."}
        </p>

        <div className="pricing-container glass reveal">
          <div className="pricing-options">
            <h3 style={{marginBottom: '1.5rem', color: 'var(--text-title)'}}>Select Requirements</h3>
            
            <div className="option-group">
              <label>Website Type</label>
              <div className="toggle-buttons">
                <button 
                  className={`btn ${features.pages === 1 ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setFeatures(prev => ({...prev, pages: 1}))}
                  style={{flex: 1}}
                >
                  Landing Page
                </button>
                <button 
                  className={`btn ${features.pages === 5 ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setFeatures(prev => ({...prev, pages: 5}))}
                  style={{flex: 1}}
                >
                  Multi-Page
                </button>
              </div>
            </div>

            <div 
              className={`checkbox-item glass ${features.booking ? 'active' : ''}`}
              onClick={() => toggleFeature('booking')}
            >
              <div className="check-circle">{features.booking && <Check size={16} />}</div>
              <span>Booking / E-Commerce System (+RM800)</span>
            </div>

            <div 
              className={`checkbox-item glass ${features.domain ? 'active' : ''}`}
              onClick={() => toggleFeature('domain')}
            >
              <div className="check-circle">{features.domain && <Check size={16} />}</div>
              <span>Domain & Hosting 1 Year (+RM150)</span>
            </div>

            <div 
              className={`checkbox-item glass ${features.seo ? 'active' : ''}`}
              onClick={() => toggleFeature('seo')}
            >
              <div className="check-circle">{features.seo && <Check size={16} />}</div>
              <span>Advanced SEO Setup (+RM300)</span>
            </div>
          </div>

          <div className="pricing-result">
            <div className="result-card glass">
              <Calculator size={40} className="result-icon" />
              <h4>Estimated Investment</h4>
              <div className="price-display">
                <span className="currency">RM</span>
                <span className="amount">{calculatePrice()}</span>
              </div>
              <p>This is a rough estimate. Final price depends on specific requirements and design complexity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
