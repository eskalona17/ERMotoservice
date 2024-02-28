import React, { useState, useEffect } from "react"

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Comprobar si las cookies están guardadas en el navegador
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")

    // Mostrar el banner solo si las cookies no han sido aceptadas
    setShowBanner(!cookiesAccepted)
  }, [])

  const handleAccept = () => {
    // Guardar la preferencia del usuario en cuanto a las cookies
    localStorage.setItem("cookiesAccepted", "true")
    setShowBanner(false)
  }

  return (
    <div
      className={`fixed bottom-0 w-8/12 lg:w-full bg-secondary-200 text-white p-4 ${
        showBanner ? "block" : "hidden"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center">
        <p className="text-sm mb-5">
          Este sitio usa cookies de análisis necesarias para la mejora del sitio. Si no cambia la
          configuración de su navegador, usted acepta su uso. Lea nuestra <a href="/politica-cookies" className="text-blue-400 underline">política de cookies</a>.
        </p>
        <button
          onClick={handleAccept}
          className="ml-4 px-4 py-2 bg-primary-500 text-primary-50 rounded focus:outline-none hover:bg-primary-600"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
