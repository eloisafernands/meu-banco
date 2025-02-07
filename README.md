# React + Vite
Documentação das Funcionalidades
- Funcionalidades do projeto "Meu Banco". Uma aplicação React onde o usuário poderá entrar com suas credenciais e ser redirecionado para a página inicial de uma aplicação fictícia.

1. Autenticação e Contexto Global
UserContext.jsx: Responsável por gerenciar o estado global do usuário autenticado e garantir acesso seguro às informações.

2. Páginas Principais
login.jsx: Tela de login.
dashboard.jsx: Página inicial pós-login.
carteira.jsx: Gerenciamento da carteira.
transferencias.jsx: Interface para transferências bancárias.
servicos.jsx: Lista de serviços disponíveis.
configuracoes.jsx: Configurações da conta.

4. Componentes Reutilizáveis
- Autenticação e Rotas
LoginForm.jsx: Formulário de login.
PrivateRoute.jsx: Protege rotas restritas.
* arquivo routes com as rotas definidas.

- Layout e Navegação
LoginLayout.jsx: Layout do login.
DashboardLayout.jsx: Layout da Dashboard.
Nav.jsx: Menu de navegação.
Header.jsx: Informações do usuário com botão de deslogar.
InfoAccount.jsx: Informações da conta.

4. Tecnologias Utilizadas
React.js
React Router para gerenciamento de rotas
Context API para estado global
Estilização com CSS/SASS

5. Como Rodar o Projeto
Instale as dependências com o comando npm install
Inicie o servidor de desenvolvimento com o comando npm run dev
Acesse no navegador
