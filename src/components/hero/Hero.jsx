import React from "react"
import motosHeroImage  from "../../../public/img/motos_hero.webp"
import motosHeroMobile  from "../../../public/img/moto_mobile_hero.webp"

const Hero = () => {

  const handleButtonContact = (e) => {
    e.preventDefault()
  
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  

  return (
    <section id="hero">
      <div className="custom-screen flex items-center justify-between gap-12 md:gap-32">
        <div className="flex flex-col gap-y-3 lg:gap-y-9 max-w-md">
          <h1 className="text-primary-700 text-xl text-gray-800 font-extrabold md:text-2xl lg:text-5xl uppercase">
            Transporte de motos
          </h1>
          <h2 className="text-primary-500 max-w-60 md:text-lg">
            Llevamos tu moto a cualquier parte de España
          </h2>
          <a
            href="#contacta" onClick={(e) => handleButtonContact(e)}
            className="mt-3 flex w-fit items-center rounded-md border border-transparent bg-primary-600 px-5 py-2 text-primary-50 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            CONTACTA
          </a>
        </div>
        <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg sm:hidden aspect-auto"
              loading="lazy"
              src={motosHeroMobile}
              alt="transporte moto"
            />
            <img
              className="h-auto max-w-full rounded-lg hidden sm:block aspect-auto"
              loading="lazy"
              src={motosHeroImage}
              alt="transporte moto"
            />
          <div className="hidden md:block w-full h-full border-4 border-primary-500 rounded-lg absolute bottom-10 right-10 -z-10"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
