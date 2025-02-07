import '/src/styles/LoginForm.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import Link from './tagLink';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginUser } = useUser();

  const loginValidation = (e) => {
    e.preventDefault();
    if (username === 'Elo' && password === 'pass.elo') {
      loginUser(username);
      navigate('/dashboard'); 
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="loginForm">
      <h1>Bem vindo<strong> :)</strong></h1>
      <h2>Entre na sua conta</h2>
      <form onSubmit={loginValidation}>
        <Input
          label="Usuário"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />     
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <div className="authOptions">
          <Checkbox 
            label="Lembrar dispositivo"
            name="remember"
            id="remember"
            onChange={(e) => setRemember(e.target.checked)}
            checked={remember}
          />
          <Link to="/" variant="forgotPassword">Esqueceu sua senha?</Link>        
        </div>
        {error && <p>{error}</p>}
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/" variant="createAccount">
        Não tem conta? <strong>Faça uma agora</strong>
      </Link>
    </div>
  );
};

export default LoginForm;
