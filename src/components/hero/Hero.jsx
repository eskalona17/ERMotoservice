import React from "react"

const Hero = () => {
  return (
    <section className="py-28 overflow-hidden duration-300 ease-in">
      <div className="custom-screen items-center gap-12 text-gray-600 md:flex">
        <div className="flex-none space-y-5 max-w-2xl">
          <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl uppercase">
            Transporte de motos
          </h1>
          <p>
            Llevamos tu moto a cualquier parte de España
          </p>
        </div>
        <div className="flex-none mt-12 md:mt-0">
          <p>IMAGEN</p>
        </div>
      </div>
    </section>
  );
};

export default Hero
