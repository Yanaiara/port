import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Expertise from "./components/Expertise/Expertise";

export const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="expertise">
          <Expertise />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </ThemeContextProvider>
  );
};

export default App;
