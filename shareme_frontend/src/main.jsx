import React from "react"
import ReactDOM from "react-dom/client"
// Importando o componente da biblioteca react-router-dom, que é responsável pelo roteamento (URL path).
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
)
