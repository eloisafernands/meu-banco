import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carteira from "./pages/carteira";
import Configuracoes from "./pages/configuracoes";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Servicos from "./pages/servicos";
import Transferencias from "./pages/transferencias";
import DashboardLayout from "./components/DashboardLayout";
import PrivateRoute from "./components/PrivateRoute";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                            
                <Route path="/dashboard" element={<PrivateRoute />}>
                    <Route element={<DashboardLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="carteira" element={<Carteira />} />
                        <Route path="transferencias" element={<Transferencias />} />
                        <Route path="servicos" element={<Servicos />} />
                        <Route path="configuracoes" element={<Configuracoes />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
