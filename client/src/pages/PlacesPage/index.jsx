import { Link, useParams } from 'react-router-dom';
import	{SubmitPhotoButton} from '../../components/SubmitPhotoButton/index'
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
                            <div className='text-div'>
                                <h2>Title</h2>
                                <h3 > <i>Give your property a unique identity!</i></h3>
                            </div>
                    
                            <input placeholder='Example: Bag End, Finn and Jake House '></input>
                        </div>
                        <div className='input-div'>
                            <div className='text-div'>
                                <h2>Adress</h2>
                                <h3>lepo</h3>
                            </div>
                            <input placeholder='Example: Bag End, Finn and Jake House '></input>
                        </div>
                        <div className='input-div'>
                            <div className='text-div'>
                                <h2>Description</h2>
                                <h3><i>Some characteristics of the place and the location</i></h3>
                            </div>
                            <textarea  placeholder="Example: It's a very good and comfy place... beside the dragons and the skeletons" cols="20" rows="5"></textarea>
                        </div>
                
                        <div className='input-div'>
                            <div className='text-div'>
                                <h2>Photos</h2>
                                <h3><i>More = better</i></h3>
                            </div>
                            <div style={{ width: '100%' }}>
                                <input placeholder="Paste a link here "></input>
                                <SubmitPhotoButton/> 
                            </div>
                            <div className='img-input'> 
                                <button>+</button>
                            </div>
                        </div>

                        <div className='input-div-check'>
                            <div className='text-div'>
                                <h2>Timing</h2>
                            </div>
                            <div>
                                <div className='input-time-div'>
                                    <p>Check In</p>
                                    <input type="time"></input> 
                                </div>
                                <div className='input-time-div'>
                                    <p>Check Out</p>
                                    <input type="time"></input> 
                                </div>
                            </div>
                      
                         </div>
                        <button></button>
                </form>
            )}
            
        </>

    );
}