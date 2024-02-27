import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../Util/UserContext";
import './styles.css'

export const AccountPage = () =>{
    const { ready, user } = useContext(UserContext);

    if(!ready){
        return 'Loading...';
    }

    if(!user && ready){
        return <Navigate to={'/login'} />;
    }

    return(
        <div className="account-page">
            <nav className="account-nav">
                <Link to={'/account/'}> My accommodations</Link>
                <Link to={'/account/bookings'}> My bookings</Link>
                <Link to={'/account/places'}> My accommodations</Link>
            </nav>
            <p>Logged in as {user.name} ({user.email})</p>
        </div>
    );
}
