import "./App.css"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Services from "./components/services/Services"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import logo from "./assets/img/logo_movil_blanco.png"

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      <FloatingWhatsApp
        accountName="ERMotoservice"
        phoneNumber="+34639134295"
        chatMessage="¡Hola!, ¿en qué podemos ayudarte?"
        statusMessage=""
        placeholder="Escribe un mensaje..."
        avatar={logo}
      />
    </>
  )
}

export default App
