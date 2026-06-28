import { FileSignature, Globe, MonitorPlay, Code2, Cloud } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FileSignature size={40} className="service-icon" />,
      title: t.service1Title,
      description: t.service1Desc
    },
    {
      icon: <Globe size={40} className="service-icon" />,
      title: t.service2Title,
      description: t.service2Desc
    },
    {
      icon: <MonitorPlay size={40} className="service-icon" />,
      title: t.service3Title,
      description: t.service3Desc
    },
    {
      icon: <Code2 size={40} className="service-icon" />,
      title: t.service4Title,
      description: t.service4Desc
    },
    {
      icon: <Cloud size={40} className="service-icon" />,
      title: t.service5Title,
      description: t.service5Desc
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title reveal">{t.servicesTitle}</h2>
        <div className="grid-3 reveal">
          {services.map((service, index) => (
            <div key={index} className="service-card glass">
              {service.icon}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-price">
                <a href="https://wa.me/60103796742" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-3">{t.servicesBtn}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
