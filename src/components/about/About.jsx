import React from "react"
import MotoAbout1 from "../../../public/img/detalle_furgo.webp"
import MotoAbout2 from "../../../public/img/moto_paisaje.webp"
import MotoAbout3 from "../../../public/img/furgo1.webp"
import { PiMotorcycleFill } from "react-icons/pi";

const About = () => {
  return (
    <section
      id="about"
      className="my-12 lg:my-24 bg-gradient-to-b from-secondary-50 via-secondary-100 to-secondary-100 lg:border-secondary-300"
    >
      <div
        className={`flex flex-col lg:flex-row
    items-center w-full pb-10 lg:pb-0 lg:border-secondary-300 lg:hover:bg-secondary-200
    `}
      >
        <div className="w-full lg:w-7/12">
          <img
            src={MotoAbout1}
            className="object-fit w-full hover:reflect_right aspect-auto"
            loading="lazy"
            alt="detalle de furgoneta"
          />
        </div>
        <ul className="list-none space-y-5 text-secondary-800 px-7 mt-3 lg:mt-0 lg:p-0 lg:w-5/12 lg:mx-32 xl:mx-48">
          <li className="flex">
            <PiMotorcycleFill size={24} className="w-2/12" style={{ color: "#378dc0" }} />
            <span className="w-full">En ERMotoservice, no solo transportamos motos, sino que llevamos
            consigo años de experiencia y amor por el mundo de las dos ruedas.</span>
          </li>
          <li className="flex">
            <PiMotorcycleFill size={24} className="w-2/12" style={{ color: "#378dc0" }} />
            <span className="w-full">Nuestra dedicación se refleja en cada viaje que realizamos,
            ofreciendo una atención personalizada que va más allá de tus
            expectativas.</span>
          </li>
        </ul>
      </div>
      <div
        className={`flex flex-col lg:flex-row-reverse
    items-center w-full pb-10 lg:pb-0 lg:border-secondary-300 lg:hover:bg-secondary-200
    `}
      >
        <div className="w-full lg:w-7/12">
          <img
            src={MotoAbout2}
            className="object-fit w-full hover:reflect_right aspect-auto"
            loading="lazy"
            alt="moto en carretera"
          />
        </div>
        <ul className="list-none space-y-5 text-secondary-800 px-7 mt-3 lg:mt-0 lg:p-0 lg:w-5/12 lg:mx-32 xl:mx-48">
          <li className="flex">
            <PiMotorcycleFill size={24} className="w-2/12" style={{ color: "#378dc0" }} />
            <span className="w-full">Con una sólida trayectoria en el transporte de motos, hemos
            perfeccionado cada detalle para asegurarnos de que tu moto llegue a
            su destino en las mejores condiciones posibles.</span>
          </li>
          <li className="flex">
            <PiMotorcycleFill size={24} className="w-2/12" style={{ color: "#378dc0" }} />
            <span className="w-full">Cada miembro de nuestro equipo comparte la misma pasión que tú,
            garantizando una experiencia de transporte que va más allá de lo
            ordinario.</span>
          </li>
        </ul>
      </div>
      <div
        className={`flex flex-col lg:flex-row
    items-center w-full pb-10 lg:pb-0 lg:border-secondary-300 lg:hover:bg-secondary-200
    `}
      >
        <div className="w-full lg:w-7/12">
          <img
            src={MotoAbout3}
            className="object-fit w-full hover:reflect_right aspect-auto"
            loading="lazy"
            alt="detalle de furgoneta"
          />
        </div>
        <ul className="list-none space-y-5 text-secondary-800 px-7 mt-3 lg:mt-0 lg:p-0 lg:w-5/12 lg:mx-32 xl:mx-48">
          <li className="flex">
            <PiMotorcycleFill size={24} className="w-2/12" style={{ color: "#378dc0" }} />
            <span className="w-full">Entendemos que tu moto es más que un medio de transporte es una
            extensión de tu estilo de vida.</span>
          </li>
          <li className="flex">
            <PiMotorcycleFill size={24} className="w-2/12" style={{ color: "#378dc0" }} />
            <span className="w-full">Ofrecemos servicios exclusivos diseñados para satisfacer tus
            necesidades específicas, segurándonos de que tu moto reciba el trato
            que se merece.</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
