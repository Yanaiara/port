import styled from "styled-components";

export const WorksContainer = styled.div`
  padding: 120px 80px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.5s ease, color 0.5s ease;

  h1 {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.blossom};
    margin-bottom: 40px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.blossom};
`;

export const CardSubtitle = styled.h3`
  font-size: 18px;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.detail};
`;

export const CardDescription = styled.p`
  font-size: 16px;
  font-family: "Karla", sans-serif;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    background-color: ${({ theme }) => theme.colors.bubbles};
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    font-family: "Karla", sans-serif;
    padding: 4px 8px;
    border-radius: 12px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.detail};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
