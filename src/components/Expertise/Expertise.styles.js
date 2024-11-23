import styled from "styled-components";

export const ExpertiseContainer = styled.div`
  padding: 80px 80px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const ExpertiseTitle = styled.h1`
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.detail};
  margin-bottom: 40px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ExpertiseCard = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const CardIcon = styled.div`
  font-size: 40px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  text-transform: uppercase;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.5;
  text-align: center;
`;
