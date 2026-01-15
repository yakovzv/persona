import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-greeting">Hello, I'm</div>
        <h1 className="hero-name">Яков Зубец</h1>
        <h2 className="hero-title">Backend Developer</h2>
        <p className="hero-description">
          Как backend-разработчик, я живу на стыке настоящего и будущего IT.
          Моя страсть — это не просто писать код, а создавать масштабируемые решения, которые будут работать завтра так же эффективно, как сегодня.
          Я постоянно экспериментирую с новыми технологиями: от облачных платформ до инновационных баз данных.
          Для меня важно не отставать от индустрии, а предвосхищать её развитие, понимать, куда движется мир разработки, и быть готовым применить эти знания в реальных проектах.
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
