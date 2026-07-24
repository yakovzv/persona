import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">YZ</div>
      <ul className="navbar-links">
        <li><button onClick={() => scrollToSection('hero')}>Главная</button></li>
        <li><button onClick={() => scrollToSection('skills')}>Навыки</button></li>
        <li><button onClick={() => scrollToSection('experience')}>Опыт</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Контакты</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
