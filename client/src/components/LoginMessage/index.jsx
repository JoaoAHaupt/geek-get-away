import './styles.css'
import { Link } from 'react-router-dom';

export const LoginMessage = () =>{
    return(
        <div className='login-message'>
            <p>Already a member? <u><Link to={'/login'}>Login!</Link></u></p>
        </div>
    );
}