import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 16px 80px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;
  position: fixed;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.title};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 16px;
    position: absolute;
    top: 70px;
    right: 20px;
    background: ${({ theme }) => theme.colors.background};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const NavLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  border-bottom: ${(props) =>
    props.active ? `2px solid ${props.theme.colors.detail}` : "none"};
  transition: color 0.3s, border-bottom 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.detail};
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.text};
    margin: 4px 0;
    transition: all 0.3s ease;
  }
`;

export const ThemeSwitcher = styled.button`
  background-color: ${({ theme }) => theme.colors.detail};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
