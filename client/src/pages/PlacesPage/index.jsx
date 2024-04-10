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
                                <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                                </button>
                            </div>
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
                        
                        <div className='text-div'>
                            <h2>Perks</h2>
                            <h3><i>Some characteristics of the place and the location</i></h3>
                        </div>
                        <div style={{display:'grid'}}>
                            
                            <label>
                                <input type="checkbox"/>
                                <span>Magic</span>
                            </label>
                            <label >
                                <input type="checkbox"/>
                                <span>Monster pet Friendly</span>
                            </label>
                            <label >
                                <input type="checkbox"/>
                                <span>Private dragon parking spot</span>
                            </label>
                        </div>

                        <button></button>
                </form>
            )}
            
        </>

    );
}