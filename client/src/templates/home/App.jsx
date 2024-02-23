import {Route, Routes} from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { LoginPage } from "../../pages/LoginPage";
import { Layout } from "../../Layout/Layout.jsx"
import { IndexPage } from "../../pages/IndexPage";
import { RegisterPage } from "../../pages/RegisterPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

      </Route> 
    </Routes>
    
  )
}

export default App
