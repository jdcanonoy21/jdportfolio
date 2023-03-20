import React, { useState, useEffect } from "react";
import { useThemeContext } from "./../context/theme-context";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const BackgroundColor = ({ backgroundColors }) => {
  const { handleTheme } = useThemeContext();

  const firstClassName = backgroundColors[0].className;
  const secondClassName = backgroundColors[1].className;

  const [selectedTheme, setSelectedTheme] = useState(firstClassName);
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleThemeMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    toggleSelectedTheme();
  }, []);

  const toggleSelectedTheme = () => {
    setSelectedTheme((prevSelectedTheme) =>
      prevSelectedTheme === firstClassName ? secondClassName : firstClassName
    );
    handleTheme(selectedTheme);
    toggleThemeMode();
  };

  return (
    <>
      <DarkModeSwitch
        style={{ margin: "2.6rem 1.8rem 2.6rem 2.6rem" }}
        checked={isDarkMode}
        onClick={toggleSelectedTheme}
        size={20}
      />
    </>
  );
};

export default BackgroundColor;
