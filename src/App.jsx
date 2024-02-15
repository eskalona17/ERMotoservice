import "./App.css"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Services from "./components/services/Services"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
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
    </>
  )
}

export default App
