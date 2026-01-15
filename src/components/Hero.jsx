import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-greeting">Hello, I'm</div>
        <h1 className="hero-name">Yakov Zubets</h1>
        <h2 className="hero-title">Full Stack Developer</h2>
        <p className="hero-description">
          Passionate about building scalable applications and crafting
          exceptional digital experiences. Specializing in Python, React,
          and cloud technologies.
        </p>
        <div className="hero-cta">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-glow"></div>
        <div className="hero-avatar">
          <span>YZ</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
