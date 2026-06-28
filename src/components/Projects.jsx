import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.port1Title,
      description: t.port1Desc,
      tags: ["HTML5", "CSS3", "JavaScript"],
      type: t.portfolioTypeWebApp
    },
    {
      title: t.port2Title,
      description: t.port2Desc,
      tags: ["AWS Serverless", "Python", "DynamoDB"],
      type: t.portfolioTypeCloud
    },
    {
      title: t.port3Title,
      description: t.port3Desc,
      tags: ["React", "Three.js", "AWS Amplify"],
      type: t.portfolioTypeCyber
    },
    {
      title: t.port4Title,
      description: t.port4Desc,
      tags: ["React", "Next.js", "Supabase"],
      type: t.portfolioTypeFull
    }
  ];

  return (
    <section id="portfolio" className="projects-section">
      <div className="container">
        <h2 className="section-title reveal">{t.portfolioTitle}</h2>
        <div className="grid-2 reveal">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass">
              <div className="project-header">
                <span className="project-type">{project.type}</span>
                <div className="project-links">
                  <a href="https://irfanrizalv2.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><ExternalLink size={18} /></a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://irfanrizalv2.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {t.portfolioBtn} <ExternalLink size={18} style={{ marginLeft: '0.5rem' }}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
