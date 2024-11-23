import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../../ThemeContext";
import {
  HamburgerMenu,
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  ThemeSwitcher,
} from "./Header.styles";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src="./image.svg" alt="" />
      </Logo>

      <Nav>
        <NavLink as={ScrollLink} to="about" smooth={true} duration={500}>
          About
        </NavLink>
        <NavLink as={ScrollLink} to="works" smooth={true} duration={500}>
          Works
        </NavLink>
        <NavLink as={ScrollLink} to="services" smooth={true} duration={500}>
          Services
        </NavLink>
        <NavLink as={ScrollLink} to="contact" smooth={true} duration={500}>
          Contact
        </NavLink>
      </Nav>

      <HamburgerMenu onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>

      {/* Theme Switcher */}
      <ThemeSwitcher onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </ThemeSwitcher>
    </HeaderContainer>
  );
};

export default Header;
