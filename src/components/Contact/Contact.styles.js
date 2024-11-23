import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  padding: 120px 80px 24px 80px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 32px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export const InfoSection = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.detail};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Subtitle = styled.div`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  color: ${({ theme }) =>
    theme.colors.textSecondary || "rgba(27, 27, 27, 0.8)"};
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputField = styled.input`
  flex: 1;
  padding: 12px 16px;
  margin-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) =>
    theme.isDarkMode ? theme.colors.blossom : theme.colors.background};
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.detail};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.detail};
  }
`;

export const TextAreaField = styled(InputField).attrs({ as: "textarea" })`
  resize: none;
  /* height: 120px;  */
  margin-bottom: 10px;
`;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 16px; */
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.detail};
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.blossom};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
  }
`;

export const FeedbackMessage = styled.p`
  color: ${({ success, theme }) =>
    success ? theme.colors.buttercup : theme.colors.blossom};
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;
