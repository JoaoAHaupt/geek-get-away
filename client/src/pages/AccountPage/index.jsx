import { useContext, useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../../Util/UserContext";
import './styles.css'
import { LogoutButton } from "../../components/LogoutButton";
import axios from "axios";
import { PlacesPage } from "../PlacesPage";

export const AccountPage = () => {
    const { ready, user, setUser } = useContext(UserContext);
    const [activeLink, setActiveLink] = useState('');
    const [redirect, setRedirect] = useState(null);

    const { subpage } = useParams();

    useEffect(() => {
        if (ready && user) {
            if (subpage === 'bookings') {
                setActiveLink('bookings');
            } else if (subpage === 'places') {
                setActiveLink('places');
            } else {
                setActiveLink('account');
            }
        }
    }, [ready, user, subpage]);

    if (!ready) {
        return 'Loading...';
    }

    if (!user) {
        return <Navigate to={'/login'} />;
    }

    const getLinkStyle = (link) => {
        return link === activeLink ? {background: 'linear-gradient(to right, #f05841, rgb(255, 160, 28))', color:'#f5f5dc'}: {};
    };

    async function  logout  ()  {
        await axios.post('/logout');
        setRedirect('/');
    };

    if(redirect){
        setUser(null);
        return <Navigate to={redirect}/>
    }


    return (
        <div className="account-page">
            <nav className="account-nav">
                <Link to={'/account/'} style={getLinkStyle('account')}>My accommodations</Link>
                <Link to={'/account/bookings'} style={getLinkStyle('bookings')}>My bookings</Link>
                <Link to={'/account/places'} style={getLinkStyle('places')}>My accommodations</Link>
            </nav>

            {subpage ==='account'|| subpage === undefined &&(
                <>
                    <p className="user-info-account">Logged in as {user.name} ({user.email})</p>
                    <LogoutButton onClick={logout}/>
                </>
            )}

            
            {subpage ==='places'&&(
                <>

                    <PlacesPage></PlacesPage>
                </>
            )}
        </div>
    );
}

