import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import ReactGA from "react-ga4"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Legal from "./pages/Legal"
ReactGA.initialize("G-VMFZLGRLY1")

const App = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname })
  }, [])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/legal" element={<Legal />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
