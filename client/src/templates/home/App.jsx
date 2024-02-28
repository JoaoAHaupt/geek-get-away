import {Route, Routes} from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { LoginPage } from "../../pages/LoginPage/index.jsx";
import { Layout } from "../../Layout/Layout.jsx"
import { IndexPage } from "../../pages/IndexPage";
import { RegisterPage } from "../../pages/RegisterPage/index.jsx";
import axios from "axios";
import { UserContextProvider } from "../../Util/UserContext.jsx";
import { AccountPage } from "../../pages/AccountPage/index.jsx";

axios.defaults.baseURL='http://localhost:4000'
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/account/:subpage?" element={<AccountPage/>}/>

          </Route> 
        </Routes>
    </UserContextProvider>

    
  )
}

export default App
