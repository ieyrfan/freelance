import { Zap, ShieldCheck, Clock } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <section id="why-us" className="whyus-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        
        <div className="whyus-content">
          <div className="whyus-text glass">
            <h3>Experts in Digital Presence</h3>
            <p>
              We prioritize quality, security, and performance. Backed by expertise in Cloud computing and cybersecurity, your business website isn't just beautiful—it's robust and secure.
            </p>
            <p className="mt-4">
              Meanwhile, our resume creation is guided by industry best practices (ATS-friendly) to ensure you easily secure your next interview.
            </p>
          </div>

          <div className="whyus-highlights">
            <div className="highlight-item glass">
              <Zap className="highlight-icon" />
              <div>
                <h4>Fast & Modern Design</h4>
                <p>Lightning-fast, mobile-friendly websites designed following the latest UI trends.</p>
              </div>
            </div>
            <div className="highlight-item glass">
              <ShieldCheck className="highlight-icon" />
              <div>
                <h4>Secure & Reliable</h4>
                <p>Zero compromise on the security of your data and your website visitors.</p>
              </div>
            </div>
            <div className="highlight-item glass">
              <Clock className="highlight-icon" />
              <div>
                <h4>Delivered on Time</h4>
                <p>Our commitment is to deliver your project strictly within the agreed timeline.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
