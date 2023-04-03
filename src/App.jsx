import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactComponent as LogoSplash } from './assets/logo.svg';
import Navbar from './sections/navbar/Navbar';
import Home from './pages/Home';
import { gsap } from 'gsap';
import './App.scss';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    loader();

    const removeLoading = setTimeout(() => {
      document.body.classList.remove('loading');
    }, 3000);

    return () => {
      clearTimeout(removeLoading);
    };
  }, []);

  const loader = () => {
    const LLOAD = gsap.timeline({
      default: {
        ease: 'power2',
      },
    });

    LLOAD.from('.logo-splash', { autoAlpha: 0, duration: 1, color: 'red' });
    LLOAD.to('.logo-splash', {
      y: -215,
      x: -632,
      scale: 0.4,
      duration: 1,
      color: 'red',
      delay: 0.5,
    });
    LLOAD.to('.load-container', { autoAlpha: 0, duration: 0.8, delay: 0.1 });
  };

  return (
    <BrowserRouter>
      <main>
        <div className="load-container">
          <div className="logo-container">
            <LogoSplash className="logo-splash" />
          </div>
        </div>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
      </main>
    </BrowserRouter>
  );
};

export default App;
