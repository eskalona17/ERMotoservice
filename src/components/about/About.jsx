import React from "react";
import { about } from "../../assets/data/data";
import AboutItem from "./AboutItem";
import MotoAbout1 from "../../assets/img/detalle_furgo.webp";
import MotoAbout2 from "../../assets/img/moto_paisaje.webp";
import MotoAbout3 from "../../assets/img/furgo1.webp";

const About = () => {
  return (
    <section
      id="about"
      className="my-12 lg:my-24 bg-gradient-to-b from-secondary-50 via-secondary-100 to-secondary-100 lg:border-secondary-300"
    >
      {/* {about.map((item, index) => (
          <AboutItem 
          key={item.id} 
          {...item}
          flexDirection={getStyleForIndex(index)}
           />
        ))} */}
      <div
        className={`flex flex-col lg:flex-row
    items-center w-full pb-10 lg:pb-0 lg:border-secondary-300 lg:hover:bg-secondary-200
    `}
      >
        <div className="w-full lg:w-7/12">
          <img
            src={MotoAbout1}
            className="object-fit w-full hover:reflect_right"
            loading="lazy"
            alt="detalle de furgoneta"
          />
        </div>
        <p className="text-secondary-800 px-10 mt-3 lg:mt-0 lg:p-0 lg:w-5/12 lg:mx-32 xl:mx-48">
          En ERMotoservice, no solo transportamos motos, sino que llevamos
          consigo años de experiencia y amor por el mundo de las dos ruedas.
          Nuestra dedicación se refleja en cada viaje que realizamos, ofreciendo
          una atención personalizada que va más allá de tus expectativas.
        </p>
      </div>
      <div
        className={`flex flex-col lg:flex-row-reverse
    items-center w-full pb-10 lg:pb-0 lg:border-secondary-300 lg:hover:bg-secondary-200
    `}
      >
        <div className="w-full lg:w-7/12">
          <img
            src={MotoAbout2}
            className="object-fit w-full hover:reflect_right"
            loading="lazy"
            alt="moto en carretera"
          />
        </div>
        <p className="text-secondary-800 px-10 mt-3 lg:mt-0 lg:p-0 lg:w-5/12 lg:mx-32 xl:mx-48">
          En ERMotoservice, no solo transportamos motos, sino que llevamos
          consigo años de experiencia y amor por el mundo de las dos ruedas.
          Nuestra dedicación se refleja en cada viaje que realizamos, ofreciendo
          una atención personalizada que va más allá de tus expectativas.
        </p>
      </div>
      <div
        className={`flex flex-col lg:flex-row
    items-center w-full pb-10 lg:pb-0 lg:border-secondary-300 lg:hover:bg-secondary-200
    `}
      >
        <div className="w-full lg:w-7/12">
          <img
            src={MotoAbout3}
            className="object-fit w-full hover:reflect_right"
            loading="lazy"
            alt="detalle de furgoneta"
          />
        </div>
        <p className="text-secondary-800 px-10 mt-3 lg:mt-0 lg:p-0 lg:w-5/12 lg:mx-32 xl:mx-48">
          En ERMotoservice, no solo transportamos motos, sino que llevamos
          consigo años de experiencia y amor por el mundo de las dos ruedas.
          Nuestra dedicación se refleja en cada viaje que realizamos, ofreciendo
          una atención personalizada que va más allá de tus expectativas.
        </p>
      </div>
    </section>
  );
};

export default About;
