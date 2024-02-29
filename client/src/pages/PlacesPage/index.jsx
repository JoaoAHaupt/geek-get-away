import { Link, useParams } from 'react-router-dom';
import './styles.css'

export const PlacesPage = () =>{
    const {action} = useParams();

    return(
        <>
            {action!=='new' &&(
                <Link className='new-places-link' to={'/account/places/new'}>+ Add new places</Link>
            )}

            {action ==='new'&&(
                <form className='new-places-form'>
                        <p>Title</p>

                     
                        <input placeholder='Title'></input>
                        <p>Adress</p>

                        <input ></input>
                        <p>Description</p>

                        <input ></input>

                        <input type="image"></input>    


                        <p>Check In</p>
                        <input type="time" ></input>
                        <p>Check Out</p>

                        <input type="time"></input>
                </form>
            )}
            
        </>

    );
}