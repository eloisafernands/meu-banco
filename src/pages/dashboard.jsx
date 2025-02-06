import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/carteira">Carteira</Link></li>
          <li><Link to="/transferencias">Transferências</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/configuracoes">Configurações</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;