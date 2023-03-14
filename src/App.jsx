import { BrowserRouter } from "react-router-dom";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import { useThemeContext } from "./context/theme-context";

const App = () => {
  const { themeState } = useThemeContext();

  return (
    <BrowserRouter>
      <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar />
        <Header />
      </main>
    </BrowserRouter>
  );
};

export default App;
