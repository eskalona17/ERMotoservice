import React from "react" 
import { LuCopyright } from "react-icons/lu" 

const Footer = () => {
  const currentYear = new Date().getFullYear() 

  return (
    <section
      id="footer"
      className="bg-gradient-to-b from-primary-300 via-primary-400 to-primary-600"
    >
      <div className="max-w-screen-xl mx-auto py-12 flex flex-col justify-center items-center text-secondary-50">
        <div className="flex items-center gap-2">
          <span>
            <LuCopyright />
          </span>
          <p>{currentYear} ERMotoservice</p>
        </div>
        <p>Made with love by <a href="https://www.linkedin.com/in/fernandoescalonalonso/" rel="nofollow noopener noreferrer" target="_blank" className="cursor-pointer focus:outline-none">Fernando Escalona</a></p>
      </div>
    </section>
  ) 
} 

export default Footer 
