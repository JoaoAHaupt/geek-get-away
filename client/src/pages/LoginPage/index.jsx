import './styles.css'
import { RegisterMessage } from '../../components/RegisterMessage';
import { LoginButton } from '../../components/LoginButton';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Util/UserContext.jsx';

export const LoginPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [LoginResponse, SetLoginResponse] = useState('');
    const [pColor, setPColor] = useState('green');
    const [redirect, setRedirect] = useState(false);

    const {setUser} = useContext(UserContext);
    async function handleLogin(ev) {
        ev.preventDefault();
        SetLoginResponse(''); 
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            setRedirect(true);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setPColor('red');
                SetLoginResponse(error.response.data.error);
            } else {
                setPColor('red');
                SetLoginResponse('Login Failed');
            }
        }
    }
    

    if(redirect){
        return <Navigate to={'/'}/>
    }

    return(
        <div className="login-page">
        <form className="login-form" onSubmit={handleLogin}>
                <h1>Login</h1>
                <input type='email' placeholder='your@email.com' value={email} onChange={ev =>setEmail(ev.target.value)}></input>
                <input type='password' placeholder='password' value={password} onChange={ev =>setPassword(ev.target.value)}></input>
                <p style={{ color: pColor }}>{LoginResponse}</p>
                <LoginButton/>
                <RegisterMessage/>
            </form>
        </div>
    );
}