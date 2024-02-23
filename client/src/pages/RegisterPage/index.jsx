import './styles.css'
import { LoginMessage } from '../../components/LoginMessage';
import { useState } from 'react';
import axios from "axios";
import { RegisterButton } from '../../components/RegisterButton';

export const RegisterPage = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');
    const [pColor, setPColor] = useState('green');


    async function registerUser(ev) {
        ev.preventDefault();
        if (password.length < 8) {
            setPColor('red');
            setRegisterMessage('Password must be at least 8 characters');
            return; 
        }
        try {
            await axios.post('/register', {
                name,
                email,
                password,
            });
            setPColor('green');
            setRegisterMessage('Registration successful!');
        } catch (e) {
            setPColor('red');
            setRegisterMessage('Registration failed. Please try again');
        }
    }
    

    return(
        <div className="register-page">
            <form className="register-form" onSubmit={registerUser}>
                <h1>Register</h1>
                <input type='text' placeholder='Your name' value={name} onChange={ev => setName(ev.target.value)}></input>
                <input type='email' placeholder='your@email.com'value={email} onChange={ev => setEmail(ev.target.value)}></input>
                <input type='password' placeholder='password'value={password} onChange={ev => setPassword(ev.target.value)}></input>
                <p style={{ color: pColor }}>{registerMessage}</p>
                <RegisterButton/>
                <LoginMessage/>
            </form>
        </div>
    );
}