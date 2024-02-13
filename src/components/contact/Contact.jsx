import React from "react"

function Contact() {
  return (
    <section className="custom-screen flex flex-col items-center md:flex-row-reverse justify-evenly items-start py-4 w-full">
      <div className="flex flex-col justify-center items-center py-5">
        <h3 className="text-2xl font-semibold mb-5">Información de contacto</h3>
        <div className="flex gap-x-5 w-64">
          <span>icono</span>
          <p>info@ermotoservice.com</p>
        </div>
        <div className="flex gap-x-5 w-64">
          <span>icono</span>
          <p>+34 666 66 66 66</p>
        </div>
      </div>
      <form action="" className="flex flex-col gap-y-5 w-full">
        <input type="text" placeholder="Nombre" className="bg-cyan-700 w-36" />
        <input type="email" placeholder="Email" className="bg-cyan-700 w-36" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Mensaje"
          className="bg-cyan-700 "
        ></textarea>
        <button
          type="submit"
          className="mt-3 flex w-fit items-center self-center justify-center rounded-md border border-transparent bg-indigo-600 px-7 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contact
