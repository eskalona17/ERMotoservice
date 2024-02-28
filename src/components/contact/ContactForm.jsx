import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import ReactGA from 'react-ga4'

const ContactForm = () => {
  const form = useRef()
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  })

  const sendEmail = (e) => {
    e.preventDefault()
  
    const formElement = form.current
  
    const errorsCopy = { ...errors }

    ReactGA.event({
      category: 'User',
      action: 'Click en botón de contacto'
    })
  
    if (!formElement.user_name.value.trim()) {
      errorsCopy.user_name = "Por favor, ingrese su nombre."
    } else {
      errorsCopy.user_name = ""
    }
  
    if (!formElement.user_email.value.trim()) {
      errorsCopy.user_email = "Por favor, ingrese su dirección de correo electrónico."
    } else {
      errorsCopy.user_email = ""
    }
  
    if (!formElement.message.value.trim()) {
      errorsCopy.message = "Por favor, ingrese su mensaje."
    } else {
      errorsCopy.message = ""
    }
  
    setErrors(errorsCopy)
  
    if (Object.values(errorsCopy).some((error) => error !== "")) {
      return
    }
  
    emailjs
      .sendForm("service_rt3zfam", "template_vyij7pq", formElement, {
        publicKey: "RrFjtni53h12EAKQU",
      })
      .then(
        () => {
          console.log("SUCCESS!")
          setIsSuccess(true)
          setTimeout(() => {
            setIsSuccess(false)
          }, 5000) // Hide success message after 3 seconds
  
          // Reset the form fields
          formElement.reset()
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )
  }
  
  

  return (
    <form
      ref={form}
      method="POST"
      onSubmit={sendEmail}
      className="flex flex-col gap-y-5 w-9/12 lg:w-5/12"
    >
      <input
        type="text"
        placeholder="Nombre"
        name="user_name"
        className={`w-64 border-b border-secondary-300 focus:outline-none text-secondary-900 ${
          errors.user_name ? 'text-sm text-error-500' : ''
        }`}
      />
      {errors.user_name && (
        <p className="text-sm text-error-500">{errors.user_name}</p>
      )}

      <input
        type="email"
        placeholder="Email"
        name="user_email"
        className={`w-64 border-b border-secondary-300 focus:outline-none text-secondary-900 ${
          errors.user_email ? 'text-sm text-error-500' : ''
        }`}
      />
      {errors.user_email && (
        <p className="text-sm text-error-500">{errors.user_email}</p>
      )}

      <textarea
        placeholder="Mensaje"
        name="message"
        className={`border-b border-secondary-300 focus:outline-none text-secondary-900 ${
          errors.message ? 'text-sm text-error-500' : ''
        }`}
      />
      {errors.message && (
        <p className="text-sm text-error-500">{errors.message}</p>
      )}

      <input
        type="submit"
        className="mt-3 flex w-fit items-center self-center justify-center rounded-md border border-transparent bg-primary-600 px-5 py-2 text-primary-50 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        value="Enviar"
      />

      {isSuccess && (
        <p className="text-success-500 mt-3">¡El correo electrónico se ha enviado con éxito!</p>
      )}
    </form>
  )
}

export default ContactForm
