import React from "react"
import { LuCopyright } from "react-icons/lu"
import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section
      id="footer"
      className="bg-gradient-to-b from-primary-300 via-primary-400 to-primary-600"
    >
      <div className="max-w-screen-xl mx-auto py-12 flex flex-col justify-center items-center text-secondary-50">
        <div className="flex w-full items-center gap-y-5 flex-col">
          <div className="flex w-full items-start md:items-center justify-center gap-x-5 md:gap-x-20">
            <div className="flex items-center gap-x-1">
              <span>
                <LuCopyright />
              </span>
              <p>{currentYear} ERMotoservice</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-5">
              <Link to="/aviso-legal">Aviso Legal</Link>
              <Link to="/politica-cookies">Política de Cookies</Link>
              <Link to="/politica-privacidad">Política de Privacidad</Link>
            </div>
          </div>
          <p>
          Made with love by{" "}
          <a
            href="https://www.linkedin.com/in/fernandoescalonalonso/"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="cursor-pointer focus:outline-none"
          >
            Fernando Escalona
          </a>
        </p>
        </div>
      
      </div>
    </section>
  )
}

export default Footer
