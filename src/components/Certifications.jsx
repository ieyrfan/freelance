import { Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Certifications.css';

const certsData = [
  { name: "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1", issuer: "Oracle", date: "2026" },
  { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", date: "2025" },
  { name: "Python Programming with Red Hat (AD141 - RHA)", issuer: "Red Hat", date: "May 2026" },
  { name: "AWS Academy Cloud Security Foundations", issuer: "Amazon Web Services", date: "Jan 2026" },
  { name: "AWS Academy Cloud Security Builder", issuer: "Amazon Web Services", date: "Jan 2026" },
  { name: "Network Defense", issuer: "Cisco", date: "Sep 2025" },
  { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", date: "May 2025" },
  { name: "Functions, Formulas, and Charts in Google Sheets", issuer: "Google", date: "Apr 2025" },
  { name: "Get Started with Google Workspace Tools", issuer: "Google", date: "Apr 2025" },
  { name: "Junior Cybersecurity Analyst Career Path", issuer: "Cisco", date: "Aug 2024" },
  { name: "Endpoint Security", issuer: "Cisco", date: "Aug 2024" },
  { name: "Networking Basics", issuer: "Cisco", date: "Aug 2024" },
  { name: "AI Appreciate Badge - AI untuk Rakyat", issuer: "MyDIGITAL and Intel", date: "Jun 2024" },
  { name: "AI Aware Badge - AI untuk Rakyat", issuer: "MyDIGITAL and Intel", date: "Jun 2024" },
  { name: "Cloud Computing Fundamentals", issuer: "RunCloud Education", date: "Jan 2024" },
  { name: "Ethical Hacker", issuer: "Cisco", date: "Oct 2023" },
  { name: "Cyber Threat Management", issuer: "Cisco", date: "Oct 2023" },
  { name: "Introduction to IoT", issuer: "Cisco", date: "Oct 2023" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco", date: "Jun 2023" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "Feb 2023" },
  { name: "Malaysian Skills Certificate IT Network Support Level 3", issuer: "Jabatan Pembangunan Kemahiran", date: "Feb 2023" }
];

const Certifications = () => {
  const { lang } = useLanguage();

  return (
    <section id="certifications" className="certs-section">
      <div className="container">
        <h2 className="section-title reveal">
          {lang === 'ms' ? 'Sijil Profesional' : 'Professional Certifications'}
        </h2>
        <div className="certs-grid">
          {certsData.map((cert, index) => (
            <div key={index} className="cert-card glass reveal">
              <Award className="cert-icon" size={28} />
              <div className="cert-info">
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
