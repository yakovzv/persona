import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend or email service
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-heading">Let's Connect</h3>
          <p className="contact-text">
            I'm always interested in hearing about new opportunities,
            collaborations, or just having a chat about technology.
            Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">
              <div className="link-icon">@</div>
              <div className="link-content">
                <span className="link-label">Email</span>
                <span className="link-value">your.email@example.com</span>
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="link-icon">GH</div>
              <div className="link-content">
                <span className="link-label">GitHub</span>
                <span className="link-value">github.com/username</span>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="link-icon">in</div>
              <div className="link-content">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">linkedin.com/in/username</span>
              </div>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-submit">
            Send Message
          </button>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Yakov Zubets. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
