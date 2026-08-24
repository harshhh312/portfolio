import { useState } from "react";
import { Menu, X } from "lucide-react";

import "./../styles/home.scss";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className="navbar">

      <div className="nav-container">

        {/* Logo */}

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <span>&lt;</span>
          Harsh
          <span>/&gt;</span>
        </a>


        {/* Desktop Navigation */}

        <div className="nav-links">

          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#education">
            Education
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* Desktop GitHub */}

        <a
          href="https://github.com/harshhh312"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          GitHub ↗
        </a>


        {/* Mobile Button */}

        <button
          className="mobile-menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >

          {menuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}

        </button>

      </div>




    </nav>
  );
}

export default Navbar;