import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from 'react-ga';
// Initialize React Ga with your tracking ID
ReactGA.initialize('G-VMFZLGRLY1');

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
