import React, { useRef, useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Fade from 'react-reveal/Fade';
import data from './data';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const topRef = useRef();
  const bottomRef = useRef();

  // store the timeline in a ref
  const menuIconTl = useRef();

  useEffect(() => {
    menuIconTl.current = gsap
      .timeline({
        default: {
          duration: 0.3,
          ease: 'power2.out',
        },
      })

      .fromTo(topRef.current, { y: 0 }, { y: 4.5 })
      .fromTo(bottomRef.current, { y: 0 }, { y: -4.5 }, 0)
      .fromTo(topRef.current, { rotation: 0 }, { rotation: 135 }, 0)
      .fromTo(bottomRef.current, { rotation: 0 }, { rotation: 45 }, 0);
  }, []);

  useEffect(() => {
    menuIconTl.current.reversed(!isMenuOpen);
  }, [isMenuOpen]);

  const handlePageNavClick = (e, nav) => {
    e.preventDefault();
    window.location.href = nav;
  };

  const body = document.body;
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      body.classList.remove('scroll-up');
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
      body.classList.remove('scroll-up');
      body.classList.add('scroll-down');
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains('scroll-down')
    ) {
      body.classList.remove('scroll-down');
      body.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
  });

  return (
    <nav className="nav">
      <Fade top>
        <div className="nav__container">
          <Logo className="nav__logo" id="logo" />
        </div>
      </Fade>
      <div className="nav__icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span ref={topRef}></span>
        <span ref={bottomRef}></span>
      </div>
      <div className="nav__menu">
        <Fade top>
          <nav>
            <ul
              className={
                isMenuOpen ? 'nav__list nav__list-active' : 'nav__list'
              }
            >
              {data.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className="nav__item"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <Link
                      to={nav.link}
                      onClick={(e) => handlePageNavClick(e, nav.link)}
                    >
                      {nav.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Fade>
      </div>
    </nav>
  );
};

export default Navbar;
