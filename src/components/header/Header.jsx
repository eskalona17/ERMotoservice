import React, { useState, useEffect } from "react"
import { navbarItems } from "../../assets/data"
import HeaderItem from "./HeaderItem"
import logo from "../../../public/img/logo_transparente.png"
import logoMobile from "../../../public/img/logo_movil_transparente.png"
import { useNavigate, useLocation } from "react-router-dom"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)

  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    setPrevScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const isScrollingUp = prevScrollY > scrollTop

      setIsScrolled(scrollTop > 0 && isScrollingUp)
      setPrevScrollY(scrollTop)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollY, isScrolled])

  const handleSmoothScroll = (event, sectionId) => {
    event.preventDefault()
    const targetSection = document.getElementById(sectionId)
    if (targetSection) {
      const targetOffset = targetSection.offsetTop

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      })

      setShowMenu(false)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    const isHomePage = location.pathname === "/"

    isHomePage
      ? window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      : navigate("/")

    setShowMenu(false)
  }

  return (
    <section
      id="home"
      className={`w-full z-30 scroll-smooth transition-all duration-500 ease-in-out ${
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
          <a
            href="#home"
            className="focus:outline-none"
            onClick={(e) => handleLogoClick(e)}
          >
            <img
              src={logoMobile}
              className={`block lg:hidden w-16`}
              alt="Logo ERmotoservice"
            />
            <img
              src={logo}
              className={`hidden lg:block w-32`}
              alt="Logo ERmotoservice"
            />
          </a>
        </div>

        {/* Menú de hamburguesa */}
        {location.pathname === "/" && (
          <div className="md:hidden">
            <div
              onClick={toggleMenu}
              className="text-black cursor-pointer focus:outline-none focus:text-white"
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
            </div>
          </div>
        )}
        {/* Menú de navegación */}
        {location.pathname === "/" && (

        <div className={`md:flex ${showMenu ? "block" : "hidden"}`}>
          <img
            src={logoMobile}
            className={`block md:hidden w-16`}
            alt="Logo ERmotoservice"
          />
          <ul
            className={`flex flex-col md:flex-row gap-16 md:flex ${
              showMenu ? "mt-10" : "mt-0"
            }`}
          >
            {navbarItems.map((item) => (
              <HeaderItem
                key={item.id}
                id={item.id}
                link={item.link}
                onClick={(e) => handleSmoothScroll(e, item.id)}
              />
            ))}
          </ul>
        </div>
        )}
      </nav>
    </section>
  )
}

export default Header
