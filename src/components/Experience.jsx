import './Experience.css';

const experienceData = [
  {
    title: 'Главный разработчик (серверная часть)',
    company: 'Северсталь',
    period: '2023 - Present',
    description: 'Тим лид кроссфункциональной команды разработки. Занимаюсь проектированием микросервисной архитектуры, руковожу и участвую в разработке продукта компьютерного зрения.',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'YOLO'],
  },
  {
    title: 'Backend Python Developer',
    company: 'Black Wall Group',
    period: '2022 - 2023',
    description: 'Разработка отказоустойчивых микросервисов',
    technologies: ['Python', 'Golang', 'FastAPI', 'MySQL', 'Postgres', 'Clickhouse', 'Mongo', 'Redis', 'Git'],
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
