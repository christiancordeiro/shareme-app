// Importando 3 componentes da biblioteca react-router-dom para configurar o roteamento na aplicação.
import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./components/Login"
import Home from "./containers/Home"

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App