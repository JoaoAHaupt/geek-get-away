import './styles.css'
import { RegisterMessage } from '../../components/RegisterMessage';
import { LoginButton } from '../../components/LoginButton';

export const LoginPage = () =>{

    return(
        <div className="login-page">
            <form className="login-form">
                <h1>Login</h1>
                <input type='email' placeholder='your@email.com'></input>
                <input type='password' placeholder='password'></input>
                <LoginButton/>
                <RegisterMessage/>
            </form>
        </div>
    );
}