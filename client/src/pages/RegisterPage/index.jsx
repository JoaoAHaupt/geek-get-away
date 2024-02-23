import './styles.css'
import { LoginMessage } from '../../components/LoginMessage';
import { useState } from 'react';
import axios from "axios";
import { RegisterButton } from '../../components/RegisterButton';

export const RegisterPage = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(ev){
        ev.preventDefault();
        axios.get('http://localhost:4000/test');
    }

    return(
        <div className="register-page">
            <form className="register-form" onSubmit={registerUser}>
                <h1>Register</h1>
                <input type='text' placeholder='Your name' value={name} onChange={ev => setName(ev.target.value)}></input>
                <input type='email' placeholder='your@email.com'value={email} onChange={ev => setEmail(ev.target.value)}></input>
                <input type='password' placeholder='password'value={password} onChange={ev => setPassword(ev.target.value)}></input>

                <RegisterButton/>
                <LoginMessage/>
            </form>
        </div>
    );
}