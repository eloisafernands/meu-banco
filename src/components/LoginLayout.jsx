import '/src/styles/LoginLayout.scss';

const LoginLayout = ({ children }) => {
  return (
    <div className="authContainer">
      <div className="authImage">
        <img src="/src/assets/portrait-woman-holding-card.png" alt="Portrait woman holding card" />
        <div className="authLogo">
          <img src="/src/assets/Meu Banco - logo branco.png" alt="Meu Banco" />
        </div>
      </div>
      <div className="authForm">
        {children}
      </div>
    </div>
  );
};
export default LoginLayout;