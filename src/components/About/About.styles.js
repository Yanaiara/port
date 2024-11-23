import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  padding: 120px 80px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.5s ease, color 0.5s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 20px;
    gap: 40px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blossom};
  font-size: 18px;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.5s ease;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  line-height: 1.2;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) =>
    theme.colors.textSecondary || "rgba(27, 27, 27, 0.8)"};
  font-size: 18px;
  font-family: "Karla", sans-serif;
  line-height: 1.6;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 48px;

  @media (max-width: 768px) {
    gap: 16px;
    flex-wrap: wrap;
  }
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 8px;
`;

export const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.blossom};
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StatLabel = styled.div`
  color: ${({ theme }) =>
    theme.colors.textSecondary || "rgba(27, 27, 27, 0.8)"};
  font-size: 16px;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 524px;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Circle = styled(motion.div)`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: radial-gradient(
    circle,
    ${({ theme, color }) => theme.colors[`circle${color}`] || color} 0%,
    transparent 70%
  );
  opacity: 0.8;
  border-radius: 50%;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transform: ${({ rotate }) => (rotate ? `rotate(${rotate}deg)` : "none")};
  transition: background-color 0.5s ease, opacity 0.5s ease;

  @media (max-width: 768px) {
    width: ${({ size }) => size / 2}px;
    height: ${({ size }) => size / 2}px;
    top: ${({ top }) => top / 2}px;
    left: ${({ left }) => left / 2}px;
  }
`;
