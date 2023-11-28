import { UserProvider } from "./providers/UserContext"
import { RoutesMain } from './routes/RoutesMain';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalReset } from "./styles/reset";





function App() {
  return (
    <div>
      <GlobalReset />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <ToastContainer />
    </div>
  )
}

export default App
