import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useThemeContext } from "./context/theme-context";
import Navbar from "./sections/navbar/Navbar";
import Home from "./pages/Home";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Socials from "./components/Socials";

const App = () => {
  const { themeState } = useThemeContext();

  return (
    <BrowserRouter>
      <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar />
        <Home />
        <Socials />
      </main>
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default App;
