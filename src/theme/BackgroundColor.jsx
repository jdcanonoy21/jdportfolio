import React, { useState, useEffect } from "react";
import { useThemeContext } from "./../context/theme-context";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const BackgroundColor = ({ backgroundColors }) => {
  const { handleTheme } = useThemeContext();

  const firstClassName = backgroundColors[0].className;
  const secondClassName = backgroundColors[1].className;

  const [selectedTheme, setSelectedTheme] = useState(firstClassName);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleThemeMode = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleSelectedTheme = () => {
    setSelectedTheme((prevSelectedTheme) =>
      prevSelectedTheme === firstClassName ? secondClassName : firstClassName
    );
    handleTheme(selectedTheme);
    toggleThemeMode();
  };

  useEffect(() => {
    toggleThemeMode();
  }, []);

  return (
    <>
      <DarkModeSwitch
        style={{ margin: "2.6rem 1.8rem 2.6rem 2.6rem" }}
        checked={isDarkMode}
        onClick={toggleSelectedTheme}
        size={20}
        moonColor="black"
        sunColor="white"
      />
    </>
  );
};

export default BackgroundColor;
