import './Experience.css';

const experienceData = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading development of microservices architecture using Python and FastAPI. Building responsive frontend applications with React. Managing CI/CD pipelines and cloud infrastructure.',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Software Agency',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects. Built RESTful APIs and integrated third-party services. Collaborated with design teams to implement pixel-perfect UIs.',
    technologies: ['Django', 'Vue.js', 'MySQL', 'Redis', 'Git'],
  },
  {
    title: 'Backend Developer',
    company: 'Startup',
    period: '2018 - 2020',
    description: 'Built scalable backend systems from scratch. Implemented real-time data processing pipelines. Optimized database queries and improved application performance.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'RabbitMQ', 'Linux'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
      </div>
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-marker">
              <div className="marker-dot"></div>
              {index < experienceData.length - 1 && <div className="marker-line"></div>}
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-tech">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
