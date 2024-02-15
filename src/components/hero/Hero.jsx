import React from "react"
import { about } from "../../assets/data/data"


const Hero = () => {
  return (
    <section className="py-10">
      <div className="custom-screen flex items-center gap-12 md:gap-24 ">
        <div className="space-y-5 max-w-2xl">
          <h1 className="text-primary-700 text-2xl text-gray-800 font-extrabold md:text-5xl uppercase">
            Transporte de motos
          </h1>
          <p className="text-primary-500">
            Llevamos tu moto a cualquier parte de España
          </p>
          <a href="" className="mt-3 flex w-fit items-center self-center justify-center rounded-md border border-transparent bg-primary-600 px-7 py-2 text-primary-50 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">CONTACTA</a>
        </div>
        <div className="relative">
          <img src={about[0].image} className='object-fit w-full' alt="" />
        <div className="w-full h-full border-4 border-primary-500 rounded-lg absolute bottom-10 right-16 -z-10"></div>

        </div>
      </div>
    </section>
  );
};

export default Hero
