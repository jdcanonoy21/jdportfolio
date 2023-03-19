import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useThemeContext } from "./context/theme-context";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";

const App = () => {
  const { themeState } = useThemeContext();

  return (
    <BrowserRouter>
      <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </BrowserRouter>
  );
};

export default App;
