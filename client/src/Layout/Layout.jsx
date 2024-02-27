import { NavBar } from "../components/NavBar/index";
import { Outlet } from 'react-router-dom';
import './styles.css'
export const Layout = () => {
  
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
    </div>
  );
};

