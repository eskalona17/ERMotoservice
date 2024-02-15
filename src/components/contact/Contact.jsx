import React from "react";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


const Contact = () => {
  return (
    <section className="custom-screen flex flex-col items-start md:flex-row-reverse justify-evenly py-4 w-full gap-10">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="hidden lg:block py-5 text-center">
        <h3 className="text-primary-700 mb-3 text-3xl font-semibold">Contacta con nosotros</h3>
        <small className="text-primary-500">Te contestaremos lo antes posible</small>
        </div>
        
        <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-center gap-10 w-full lg:items-start">
          <div className="flex flex-col justify-center items-center py-5 lg:py-0">
            <h3 className="text-primary-700 text-2xl font-semibold mb-5">
              Información de contacto
            </h3>
            <div className="flex gap-x-5 w-64 items-center">
              <span><MdMailOutline /></span>
              <p className="text-primary-500">info@ermotoservice.com</p>
            </div>
            <div className="flex gap-x-5 w-64 items-center">
              <span><FaPhone /></span>
              <p className="text-primary-500">+34 666 66 66 66</p>
            </div>
          </div>
          <form action="" className="flex flex-col gap-y-5 w-9/12 lg:w-5/12">
            <input
              type="text"
              placeholder="Nombre"
              className="w-36 border-b"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-36 border-b"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Mensaje"
              className="bg-cyan-700 border-b"
            ></textarea>
            <button
              type="submit"
              className="mt-3 flex w-fit items-center self-center justify-center rounded-md border border-transparent bg-primary-600 px-7 py-2 text-primary-50 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
