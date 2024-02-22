import {Route, Routes} from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { LoginPage } from "../../pages/LoginPage";
import { Layout } from "../../layout";
import { IndexPage } from "../../IndexPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Route>  


    </Routes>
    
  )
}

export default App
