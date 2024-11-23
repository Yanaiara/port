import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ty0q17",
        "template_2a8giyl",
        formRef.current,
        "60wcKgl1dOHd1Ug1a"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <ContactContainer>
      <ContentWrapper>
        <InfoSection>
          <Title>Contato</Title>
          <Subtitle>Compartilhe ideias e oportunidades!</Subtitle>
          <Description>
            Se você está em busca de uma desenvolvedora experiente para integrar
            sua equipe, tem um projeto inovador em mente, ou gostaria de saber
            mais sobre minhas experiências anteriores, envie-me uma mensagem!
            Estou sempre aberta a novas conexões e desafios.
          </Description>
        </InfoSection>
        <FormWrapper>
          <form ref={formRef} onSubmit={sendEmail}>
            <FormRow>
              <InputField placeholder="Seu nome" name="name" required />
              <InputField placeholder="Sobrenome" name="surname" required />
            </FormRow>
            <InputField
              placeholder="Seu email"
              name="email"
              type="email"
              required
              fullWidth
            />
            <TextAreaField
              placeholder="Sua mensagem"
              name="message"
              required
              fullWidth
            />
            <SubmitSection>
              <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
            </SubmitSection>
          </form>
          {status === "success" && (
            <p style={{ color: "green", marginTop: "20px" }}>
              Mensagem enviada com sucesso!
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "red", marginTop: "20px" }}>
              Ocorreu um erro ao enviar a mensagem. Tente novamente.
            </p>
          )}
        </FormWrapper>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact;
