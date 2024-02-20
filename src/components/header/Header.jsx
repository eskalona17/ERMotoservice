import React, { useState, useEffect } from "react";
import { navbarItems } from "../../assets/data/data";
import HeaderItem from "./HeaderItem";
import logo from "../../assets/img/logo.png";
import logoMobile from "../../assets/img/logoMobile.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const targetOffset = targetSection.offsetTop;
      const currentOffset = window.scrollY;
      const distance = Math.abs(targetOffset - currentOffset);
  
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });

      // Cerrar el menú si está abierto (opcional)
      setShowMenu(false);
    }
  };

  return (
    <section id="home"
      className={`w-full z-30 transition-all duration-300 ${
        isScrolled ? "fixed bg-secondary-50 opacity-90 shadow-lg" : ""
      }`}
    >
      <nav
        className={`max-w-screen-xl mx-auto px-8 py-7 flex justify-between ${
          showMenu ? "flex-row-reverse" : "items-center"
        }`}
      >
        {/* Logo */}
        <div className={`flex items-center ${showMenu ? "hidden" : ""}`}>
          <img
            src={logoMobile}
            className={`block lg:hidden`}
            alt="Logo ERmotoservice"
          />
          <img
            src={logo}
            className={`hidden lg:block`}
            alt="Logo ERmotoservice"
          />
        </div>

        {/* Menú de hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:text-white"
          >
            {showMenu ? (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Menú de navegación */}
        <div className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
          <img
            src={logoMobile}
            className={`block md:hidden`}
            alt="Logo ERmotoservice"
          />
          <ul
            className={`flex flex-col md:flex-row mt-10 gap-16 md:flex ${
              showMenu ? "mt-10" : "mt-0"
            }`}
          >
            {navbarItems.map((item) => (
              
              <HeaderItem key={item.id} id={item.id} link={item.link} onClick={() => handleSmoothScroll(item.id)} />
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
