import { Searchbar } from '../../components/Searchbar'
import { Userbar } from '../../components/Userbar'
import { Logo } from '../../components/Logo'
import './styles.css'


export const NavBar = () =>{
    
    

    return(
        <>
         <header >
            <Logo></Logo>
            <Searchbar/>
            <Userbar/>
         </header>
        </>
    );
}