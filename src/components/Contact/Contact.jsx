import React from "react";
import {
  ContactContainer,
  ContentWrapper,
  InfoSection,
  Title,
  Subtitle,
  Description,
  FormWrapper,
  FormRow,
  InputField,
  TextAreaField,
  SubmitSection,
  SubmitButton,
} from "./Contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <ContentWrapper>
        <InfoSection>
          <Title>Contato</Title>
          <Subtitle>Pronta para ouvir suas ideias ou oportunidades!</Subtitle>
          <Description>
            Se você está em busca de uma desenvolvedora experiente para integrar
            sua equipe, tem um projeto inovador em mente, ou gostaria de saber
            mais sobre minhas experiências anteriores, envie-me uma mensagem!
            Estou sempre aberta a novas conexões e desafios.
          </Description>
        </InfoSection>
        <FormWrapper>
          <FormRow>
            <InputField placeholder="Seu nome" name="name" />
            <InputField placeholder="Sobrenome" name="surname" />
          </FormRow>
          <InputField
            placeholder="Seu email"
            name="email"
            type="email"
            fullWidth
          />
          <TextAreaField placeholder="Sua mensagem" name="message" fullWidth />
          <SubmitSection>
            <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
          </SubmitSection>
        </FormWrapper>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact;
