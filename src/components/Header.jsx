import { useUser } from '../context/UserContext';
import '/src/styles/Header.scss';
import NotificationIcon from '../assets/icons/icon-notification.svg?react';
import UserIcon from '../assets/icons/icon-user.svg?react';


const Header = () => {
  const { user, logoutUser } = useUser(); 

  return (
    <header className="header">
      <input
        type="text"
        className="inputSearch"
        placeholder="Buscar"
      />
      <div>
        <NotificationIcon className="icon" />
        <div>
          <UserIcon className="icon" />
          <span className="WelcomeMessage">
            Bem-vindo(a), <strong>{user ? user.name : 'Visitante'}</strong>
          </span>
          {user && <button onClick={logoutUser}>Sair</button>}
        </div>
      </div>
    </header>
  );
};

export default Header;
