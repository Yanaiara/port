import React from "react";
import {
  WorksContainer,
  CardContainer,
  Card,
  CardTitle,
  CardSubtitle,
  CardDescription,
  Technologies,
} from "./Works.styles";

const Works = () => {
  // Dados das experiências profissionais
  const workExperiences = [
    {
      company: "MarketData",
      period: "2024 - Atual",
      description:
        "Desenvolvo soluções para representação de dados utilizando C# e React. Foco na integração de APIs e na melhoria da experiência do usuário.",
      technologies: ["React", "C#", "API Integration", "GraphQL"],
    },
    {
      company: "Dasa",
      period: "2023 - 2024",
      description:
        "Participei do desenvolvimento de aplicações escaláveis para profissionais de saúde, otimizando o desempenho e a integração entre front e back-end.",
      technologies: ["Angular", "Node.js", "Bitbucket", "CI/CD", "Jenkins"],
    },
    {
      company: "FCamara",
      period: "2021 - 2023",
      description:
        "Participação em equipes multidisciplinares no desenvolvimento de soluções front-end e back-end.",
      technologies: ["React", "JavaScript", "CSS", "Git", "Jest", "RestAPI"],
    },
    {
      company: "OmniChat",
      period: "2020 - 2021",
      description:
        "Garantia de qualidade e documentação técnica para uso interno e de outros times, Participação ativa em cerimônias ágeis (Scrum e Kanban) e no desenvolvimento de microfrontends utilizando Webpack Module Federation",
      technologies: ["React", "JavaScript", "Julia", "Git", "AWS"],
    },
  ];

  return (
    <WorksContainer>
      <h1>Experiências Profissionais</h1>
      <CardContainer>
        {workExperiences.map((work, index) => (
          <Card key={index}>
            <CardTitle>{work.company}</CardTitle>
            <CardSubtitle>{work.period}</CardSubtitle>
            <CardDescription>{work.description}</CardDescription>
            <Technologies>
              {work.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </Technologies>
          </Card>
        ))}
      </CardContainer>
    </WorksContainer>
  );
};

export default Works;
