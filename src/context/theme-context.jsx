import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

const initialThemeReducer = JSON.parse(
  localStorage.getItem("themeSettings")
) || { primary: "color-1", backgound: "bg-1" };

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeReducer
  );

  const handleTheme = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  //save local storage
  useEffect(
    () => {
      localStorage.setItem("themeSettings", JSON.stringify(themeState));
    },
    [themeState.primary],
    [themeState.backgound]
  );

  return (
    <ThemeContext.Provider value={{ themeState, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
