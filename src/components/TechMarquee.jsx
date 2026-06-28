import './TechMarquee.css';

const techLogos = [
  "React", "Node.js", "AWS", "Figma", "Supabase", "Python", "TypeScript", 
  "TailwindCSS", "Next.js", "Vite", "Three.js", "Cybersecurity"
];

const TechMarquee = () => {
  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-marquee">
        <div className="tech-marquee-content">
          {techLogos.map((tech, idx) => (
            <div key={idx} className="tech-item glass">
              {tech}
            </div>
          ))}
          {/* Duplicate for infinite effect */}
          {techLogos.map((tech, idx) => (
            <div key={`dup-${idx}`} className="tech-item glass">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
