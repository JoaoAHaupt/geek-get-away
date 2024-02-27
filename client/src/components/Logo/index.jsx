import { Link } from 'react-router-dom';
import './styles.css'

export const Logo = () => {
    return(
        <Link to={'/'}>
            <div className="logo">
                Geek It Away!
            </div>
        </Link>

    );
}