import './Skills.css';

const skillsData = [
  {
    category: 'Backend',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'FastAPI', level: 90 },
      { name: 'Django', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 82 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 88 },
      { name: 'Git', level: 92 },
      { name: 'Linux', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'AWS', level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies I work with</p>
      </div>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
