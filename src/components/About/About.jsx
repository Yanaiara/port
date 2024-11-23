import React from "react";
import {
  AboutContainer,
  TextContainer,
  InfoSection,
  Title,
  Subtitle,
  Description,
  StatsContainer,
  StatBox,
  StatValue,
  StatLabel,
  ImageContainer,
  StyledImage,
  Circle,
} from "./About.styles";

const About = () => {
  return (
    <AboutContainer>
      <TextContainer>
        <InfoSection>
          <Title>Sobre mim</Title>
          <Subtitle>Engenheira de Software | Full Stack Developer</Subtitle>
          <Description>
            Olá! Meu nome é Yanaiara Oliveira, sou Desenvolvedora de Software
            apaixonada pelo desenvolvimento de soluções inovadoras que combinam
            design e funcionalidade. Com experiência em front-end e back-end,
            minha especialidade é desenvolver interfaces escaláveis e fáceis de
            usar.
          </Description>
        </InfoSection>
        <StatsContainer>
          <StatBox>
            <StatValue>5+</StatValue>
            <StatLabel>Anos de Experiência</StatLabel>
          </StatBox>
          <StatBox>
            <StatValue>100+</StatValue>
            <StatLabel>Projetos Concluídos</StatLabel>
          </StatBox>
          <StatBox>
            <StatValue>10+</StatValue>
            <StatLabel>Tecnologias Utilizadas</StatLabel>
          </StatBox>
        </StatsContainer>
      </TextContainer>

      <ImageContainer>
        <Circle size={116} top={48} left={49.55} color="#D2FF85" />
        <Circle
          size={151}
          top={106}
          left={213.55}
          color="#B285FF"
          rotate={135}
        />
        <StyledImage
          src="https://media.licdn.com/dms/image/v2/D4D03AQFtIeKmGJ2GSw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702418205552?e=1737590400&v=beta&t=MNrrNazYHmHDKB4Sa2rBRTFvt62MqkxDmX-9wvXknN8"
          alt="Procurar foto"
        />

        <Circle size={88} top={42} left={41} color="#FF85D2" />
        <Circle size={122} top={172} left={80} color="#FFD885" rotate={-131} />
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;
