const Navbar = () => {
  const scrollToSection = (id) => {
      document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
      });
  };

  return (
      <nav>
          <ul>
              <li onClick={() => scrollToSection("welcomeSection")}>Welcome</li>
              <li onClick={() => scrollToSection("projectsSection")}>Projects</li>
              <li onClick={() => scrollToSection("contactSection")}>Contact</li>
          </ul>
      </nav>
  );
};

export Navbar default;