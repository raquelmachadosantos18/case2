import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Funcionalidades from '../pages/Funcionalidades'
import Login from '../pages/Login'
import AdminFuncionalidades from '../pages/Admin/AdminFuncionalidades'
import AdminSobre from '../pages/Admin/AdminSobre'
import Quartos from '../pages/Quartos'

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/eventos" element={<Funcionalidades />} />
            <Route path="/quartos" element={<Quartos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/eventos" element={<AdminFuncionalidades />} />
            <Route path="/admin/sobre" element={<AdminSobre />} />
        </Routes>
    )
}

export default Rotas