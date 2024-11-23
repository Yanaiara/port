import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../../ThemeContext";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  ThemeSwitcher,
} from "./Header.styles";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

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
        <NavLink as={ScrollLink} to="expertise" smooth={true} duration={500}>
          Expertise
        </NavLink>
        <NavLink as={ScrollLink} to="contact" smooth={true} duration={500}>
          Contact
        </NavLink>
      </Nav>

      <ThemeSwitcher onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </ThemeSwitcher>
    </HeaderContainer>
  );
};

export default Header;
