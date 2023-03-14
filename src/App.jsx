import { BrowserRouter } from "react-router-dom";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import { useThemeContext } from "./context/theme-context";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const { themeState } = useThemeContext();

  const mainRef = useRef();
  const [showFloatingnav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const handleShowFloatingNav = () => {
    setShowFloatingNav(true);
  };

  const handleHideFloatingNav = () => {
    setShowFloatingNav(false);
  };

  const handleToggleFloatingNav = () => {
    if (
      siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      handleShowFloatingNav();
    } else {
      handleHideFloatingNav();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(handleToggleFloatingNav, 2000);

    return () => clearInterval(checkYPosition);
  }, [siteYPosition]);

  return (
    <BrowserRouter>
      <main
        className={`${themeState.primary} ${themeState.background}`}
        ref={mainRef}
      >
        <Navbar />
        <Header />
        {showFloatingnav && <FloatingNav />}
      </main>
    </BrowserRouter>
  );
};

export default App;
