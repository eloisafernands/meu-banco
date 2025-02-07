import { Link, useLocation } from 'react-router-dom';
import '/src/styles/Nav.scss'
import Button from './Button';

import PainelIcon from '../assets/icons/icon-painel.svg?react';
import CarteiraIcon from '../assets/icons/icon-carteira.svg?react';
import TransferenciasIcon from '../assets/icons/icon-transferencias.svg?react';
import ServicosIcon from '../assets/icons/icon-servicos.svg?react';
import ConfiguracoesIcon from '../assets/icons/icon-configuracoes.svg?react';

const icons = {
    "Painel": PainelIcon,
    "Carteira": CarteiraIcon,
    "Transferências": TransferenciasIcon,
    "Serviços": ServicosIcon,
    "Configurações": ConfiguracoesIcon
};

const routes_menu = [
    {id: 1, path: '/dashboard', name: "Painel"},
    {id: 2, path: '/dashboard/carteira', name: "Carteira"},
    {id: 3, path: '/dashboard/transferencias', name: "Transferências"},
    {id: 4, path: '/dashboard/servicos', name: "Serviços"},
    {id: 4, path: '/dashboard/configuracoes', name: "Configurações"}
];

const Nav = () =>{
    const location = useLocation();
    return(
        <div className="nav">
            <div>
                <img src="/src/assets/Meu Banco - logo verde.png" alt="Meu Banco" />
                <nav>
                    <ul>
                        {routes_menu.map((menu, index) => {
                            const IconComponent = icons[menu.name];
                            return(
                                <li className={`${location.pathname === menu.path ? "active" : ''} li`} key={menu.id+index}>
                                    <IconComponent className="menu-icon" />
                                    <Link to={menu.path}>{menu.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <div className="help">
                <h2>Precisa<br />de ajuda?</h2>
                <p>Fale com um dos<br />nossos especialistas</p>
                <Button>Contatar</Button>
            </div>
        </div>
    );
}
export default Nav;