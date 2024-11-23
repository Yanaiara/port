import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  padding: 120px 80px 24px 80px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 64px;
  transition: background-color 0.5s ease, color 0.5s ease;

  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 32px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 126px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.detail};
  font-size: 18px;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.5s ease;
`;

export const Subtitle = styled.h2`
  width: 522px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  line-height: 48px;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    width: 100%;
  }
`;

export const Description = styled.p`
  width: 524px;
  color: ${({ theme }) => theme.colors.text || "rgba(27, 27, 27, 0.8)"};
  font-size: 21px;
  font-family: "Karla", sans-serif;
  font-weight: 400;
  line-height: 29.4px;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
    width: 100%;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const InputField = styled.input.attrs((props) => ({
  fullWidth: undefined,
}))`
  width: ${(props) => (props.fullWidth ? "100%" : "calc(50% - 8px)")};
  padding: 12px 16px;
  border: 1px solid
    ${({ theme }) => theme.colors.text || "rgba(255, 255, 255, 0.8)"};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  line-height: 25.2px;
  border-radius: 8px;
  transition: border-color 0.3s ease, background-color 0.3s ease,
    color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.detail};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.detail};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextAreaField = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 12px 16px;
  border: 1px solid
    ${({ theme }) => theme.colors.text || "rgba(255, 255, 255, 0.8)"};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  line-height: 25.2px;
  border-radius: 8px;
  resize: none;
  transition: border-color 0.3s ease, background-color 0.3s ease,
    color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.detail};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.detail};
  }
`;

export const SubmitSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  background: ${({ theme }) => theme.colors.detail};
  border: none;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.background};
  font-size: 18px;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.5s ease, color 0.5s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.blossom};
    color: ${({ theme }) => theme.colors.text};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
