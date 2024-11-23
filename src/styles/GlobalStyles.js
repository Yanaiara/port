import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    width: 200px;
    height: 200px;
    background: ${({ theme }) => theme.colors.blossom};
    border-radius: 50%;
    filter: blur(100px);
    animation: move 8s ease-in-out infinite;
  }

  body::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 300px;
    height: 300px;
    background: ${({ theme }) => theme.colors.bubbles};
    border-radius: 50%;
    filter: blur(150px);
    animation: move 10s ease-in-out infinite reverse;
  }

  @keyframes move {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -30px); }
  }
`;

export default GlobalStyles;
