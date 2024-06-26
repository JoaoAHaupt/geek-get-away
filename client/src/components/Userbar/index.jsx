import './styles.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../../Util/UserContext'

export const Userbar = () =>{

    const {user} = useContext(UserContext);

    return(
        <div className='user-bar'>
            
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#DCF2F1" className="bar-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <Link to={user?'/account':'/login'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#DCF2F1" className="user-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </Link>
                
                {!!user&&(<div className='user-name'>
                    {user.name}
                </div>)}
                
                
        </div>
    );
}