import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useForm, Controller } from "react-hook-form";

const Contact = () => {
  const { handleSubmit, control, reset } = useForm();
  const form = useRef();

  const [token, setToken] = useState("");

  const setTokenFunc = (getToken) => {
    setToken(getToken);
  };

  const emailJsSubmit = async () => {
    // Validar el captcha
    if (!token) {
      console.error("Por favor, complete el captcha.");
      return;
    }

    emailjs
      .sendForm(import.meta.env.EMAILJS_SERVICE_KEY, import.meta.env.EMAILJS_TEMPLATE_KEY, form.current, {
        publicKey: import.meta.env.EMAILJS_PUBLIC_KEY,
        recaptchaValue: token,
      })
      .then(
        () => {
          console.log(
            "Correo electrónico enviado con éxito a través de Email.js"
          );
        },
        (error) => {
          console.log(
            "Fallo en el envío del correo electrónico a través de Email.js:",
            error.text
          );
        }
      );
  };

  const onSubmit = async (data) => {
    try {
      // Validar que los campos no estén vacíos
      if (!data.name || !data.email || !data.message) {
        console.error("Por favor, complete todos los campos del formulario.");
        return;
      }

      // Puedes agregar aquí la lógica para enviar el correo electrónico con react-hook-form
      console.log("Datos del formulario:", data);

      // Envía el correo electrónico utilizando Email.js
      await emailJsSubmit();

      // Reinicia el formulario después del envío exitoso
      reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.RECAPTCHA_KEY}>
      <section id="contact" className="custom-screen flex flex-col items-start md:flex-row-reverse justify-evenly py-4 w-full gap-10">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="mb-16 text-center">
            <h3 className="text-primary-700 mb-3 text-3xl font-semibold">
              Contacta con nosotros
            </h3>
            <small className="text-primary-500">
              Te contestaremos lo antes posible
            </small>
          </div>

          <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-center gap-10 w-full lg:items-start">
            <div className="flex flex-col justify-center items-center py-5 lg:py-0">
              <div className="flex gap-x-5 w-64 items-center cursor-pointer mb-5">
                <span>
                  <MdMailOutline size={24} style={{ color: "#378dc0" }}/>
                </span>
                <p className="text-primary-500 font-semibold">info@ermotoservice.com</p>
              </div>
              <div className="flex gap-x-5 w-64 items-center cursor-pointer">
                <span>
                  <FaPhone size={22} style={{ color: "#378dc0" }}/>
                </span>
                <p className="text-primary-500 font-semibold">+34 639 134 295</p>
              </div>
            </div>
            <form
              ref={form}
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-5 w-9/12 lg:w-5/12"
            >
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Nombre"
                    className="w-36 border-b border-secondary-300"
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className="w-36 border-b border-secondary-300"
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Mensaje"
                    className="bg-cyan-700 border-b border-secondary-300"
                  />
                )}
              />
              <GoogleReCaptcha
                className="google-recaptcha-custom-class"
                onVerify={setTokenFunc}
              />
              <button
                type="submit"
                className="mt-3 flex w-fit items-center self-center justify-center rounded-md border border-transparent bg-primary-600 px-5 py-2 text-primary-50 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </section>
    </GoogleReCaptchaProvider>
  );
};

export default Contact;
