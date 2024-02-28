import './styles.css'

export const LogoutButton = ({onClick}) =>{

    return(
        <button onClick={onClick} className="logout-button">Logout</button>
    );
}