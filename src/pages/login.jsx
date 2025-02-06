import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');       
  const navigate = useNavigate();               

 
  const loginUser = () => {
    if (username === 'user123' && password === 'password123') {
      navigate('/dashboard'); 
    } else {
      setError('Credenciais inválidas'); 
    }
  };

  const userNameValidation = (e) => {   
    setUsername(e.target.value);
  };
  const passwordValidation = (e) => {   
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Usuário</label>
        <input
          type="text"
          value={username}
          onChange={userNameValidation} 
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={passwordValidation}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} 
      <button onClick={loginUser}>Entrar</button>
    </div>
  );
};

export default Login;
