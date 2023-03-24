import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./sections/navbar/Navbar";
import Home from "./pages/Home";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <main>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
      </main>
    </BrowserRouter>
  );
};

export default App;
