import { BrowserRouter } from "react-router-dom";
import { useThemeContext } from "./context/theme-context";
import Navbar from "./sections/navbar/Navbar";
import Home from "./pages/Home";
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
    </BrowserRouter>
  );
};

export default App;
