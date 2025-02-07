import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes"; 
import './styles/main.scss';

const App = () => {
  return (   
    <UserProvider> 
      <AppRoutes />
    </UserProvider>
  )
}
export default App;