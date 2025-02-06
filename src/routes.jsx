import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carteira from "./pages/carteira";
import Configuracoes from "./pages/configuracoes";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Servicos from "./pages/servicos";
import Tranferencias from "./pages/transferencias";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />}>                    
                    <Route path="carteira" element={<Carteira />} />
                    <Route path="transferencias" element={<Tranferencias />} />
                    <Route path="servicos" element={<Servicos />} />
                    <Route path="configuracoes" element={<Configuracoes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;