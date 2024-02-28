import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import "./App.css"
import ReactGA from "react-ga4"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Legal from "./pages/Legal"
import Privacidad from "./pages/Privacidad"
import Cookies from "./pages/Cookies"
ReactGA.initialize("G-VMFZLGRLY1")

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname })
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aviso-legal" element={<Legal />} />
          <Route path="/politica-privacidad" element={<Privacidad />} />
          <Route path="/politica-cookies" element={<Cookies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
