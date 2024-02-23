import './styles.css'
import { Link } from 'react-router-dom';

export const RegisterMessage = () =>{
    return(
        <div className='register-message'>
            <p>Don't Have an account yet? <u><Link to={'/register'}>Register now!</Link></u></p>
        </div>
    );
}