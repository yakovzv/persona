import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Связаться со мной</h2>
        <p className="section-subtitle">Давайте работать вместе</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-heading">Давайте общаться</h3>
          <p className="contact-text">
            Я всегда открыт к новым возможностям, сотрудничеству
            или просто разговору о технологиях.
            Не стесняйтесь написать мне!
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">
              <div className="link-icon">@</div>
              <div className="link-content">
                <span className="link-label">Email</span>
                <span className="link-value">yakovzubets@gmail.com</span>
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="link-icon">GH</div>
              <div className="link-content">
                <span className="link-label">GitHub</span>
                <span className="link-value">github.com/yakovzv</span>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="link-icon">in</div>
              <div className="link-content">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">linkedin.com/in/yakov-zubets-833945231/</span>
              </div>
            </a>
            <a href="https://t.me/yakov_zv" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="link-icon">TG</div>
              <div className="link-content">
                <span className="link-label">Telegram</span>
                <span className="link-value">@yakov_zubets</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Яков Зубец. Все права защищены.</p>
      </footer>
    </section>
  );
};

export default Contact;
