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
                        <div className='input-div'>
                            <h2>Title</h2>
                            <h3 > <i>Give your property a unique identity!</i></h3>
                            <input placeholder='Example: Bag End, Finn and Jake House '></input>
                        </div>
                        <div className='input-div'>

                            <h2>Adress</h2>
                            <h3>lepo</h3>
                            <input placeholder='Example: Bag End, Finn and Jake House '></input>
                        </div>
                        <div className='input-div'>
                            <h2>Description</h2>
                            <h3><i>Some characteristics of the place and the location</i></h3>
                            <input placeholder="Example: It's a very good "></input>
                        </div>
                        <div className='input-div-check'>
                             <div className='input-time-div'>
                                 <p>Check In</p>
                                 <input type="time"></input> 
                             </div>
                             <div className='input-time-div'>
                                 <p>Check Out</p>
                                 <input type="time"></input> 
                             </div>
                         </div>
                        <div className='input-div'>
                            <h2>Photos</h2>
                            <h3><i>More = better</i></h3>
                            <div>
                                <input placeholder="Example: It's a very good "></input>                     
                                <button>Submit</button>
                            </div>
                            

                            <div className='img-input'> 
                                <button>+</button>
                            </div>
                        </div>
                        <button></button>
                </form>
            )}
            
        </>

    );
}