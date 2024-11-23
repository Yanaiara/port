import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../emailConfig";
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
  FeedbackMessage,
  Form,
} from "./Contact.styles";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const email = form.email.value;
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!validateEmail(email)) {
      setStatus("error-email");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setIsSending(false);
          form.reset();
        },
        () => {
          setStatus("error");
          setIsSending(false);
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
          <Form ref={formRef} onSubmit={sendEmail}>
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
              <SubmitButton type="submit" disabled={isSending}>
                {isSending ? "Enviando..." : "Enviar Mensagem"}
              </SubmitButton>
            </SubmitSection>
          </Form>
          {status === "success" && (
            <FeedbackMessage success>
              ✅ Sua mensagem foi enviada com sucesso! Entrarei em contato em
              breve.
            </FeedbackMessage>
          )}
          {status === "error" && (
            <FeedbackMessage>
              ❌ Ocorreu um erro ao enviar sua mensagem. Tente novamente.
            </FeedbackMessage>
          )}
          {status === "error-email" && (
            <FeedbackMessage>
              ❌ O e-mail informado é inválido. Por favor, revise.
            </FeedbackMessage>
          )}
        </FormWrapper>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact;
