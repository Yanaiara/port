import React from "react";
import {
  CardContainer,
  CardDescription,
  CardIcon,
  CardTitle,
  ExpertiseCard,
  ExpertiseContainer,
  ExpertiseTitle,
} from "./Expertise.styles";

const Expertise = () => {
  const expertiseData = [
    {
      title: "Front-End Development",
      description:
        "Desenvolvo interfaces escaláveis e responsivas utilizando React, Angular e TypeScript, focando em performance e design.",
      icon: "🖥️",
      bgColor: "#FF85D2",
    },
    {
      title: "Back-End Development",
      description:
        "Crio soluções robustas com Node.js, C# e APIs REST, garantindo a integração perfeita entre front e back-end.",
      icon: "💾",
      bgColor: "#B2E4F9",
    },
    {
      title: "Automation & Testing",
      description:
        "Automatizo processos com CI/CD, Jenkins, e implemento testes utilizando Jest para garantir qualidade contínua.",
      icon: "⚙️",
      bgColor: "#9EE09E",
    },
  ];

  return (
    <ExpertiseContainer>
      <ExpertiseTitle>My Expertise</ExpertiseTitle>
      <CardContainer>
        {expertiseData.map((item, index) => (
          <ExpertiseCard key={index} bgColor={item.bgColor}>
            <CardIcon>{item.icon}</CardIcon>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </ExpertiseCard>
        ))}
      </CardContainer>
    </ExpertiseContainer>
  );
};

export default Expertise;
