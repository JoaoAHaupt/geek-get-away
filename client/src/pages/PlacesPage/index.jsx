import { Link, useParams } from 'react-router-dom';
import	{SubmitPhotoButton} from '../../components/SubmitPhotoButton/index'
import './styles.css'
import { useState } from 'react';
import { Perks } from '../../components/Perks';
import axios from "axios";

export const PlacesPage = () =>{
    const {action} = useParams();
    const [numberGuests, setNumberGuests] = useState(1);
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [photoLink, setPhotoLink] = useState('')
    const [addedPhotos, setAddedPhotos] = useState([])
    const [description, setDescription] = useState('')
    const [perks, setPerks] = useState([])
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [houseRules, setHouseRules] = useState('')

    async function  addPhotoByLink(ev){
        ev.preventDefault();
        const {data:filename} = await axios.post('/upload-by-link', {link:photoLink})
        setAddedPhotos(prev=>{
            return[...prev, filename];
        });
        setPhotoLink('');
    }

    const handleNumberChange = (event) => {
        let newNumber = parseInt(event.target.value);
        if (isNaN(newNumber) || newNumber < 1) {
            setNumberGuests = 1;
        } else if (newNumber > 10000) {
            setNumberGuests = 10000;
        }
        setNumberGuests(newNumber);
    };

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
                    
                            <input placeholder='Example: Bag End, Finn and Jake House ' onChange={ev=>setTitle(ev.target.value)}></input>
                        </div>
                        <div className='input-div'>
                            <div className='text-div'>
                                <h2>Adress</h2>
                                <h3>lepo</h3>
                            </div>
                            <input placeholder='Example: Bag End, Finn and Jake House ' onChange={ev=>setAddress(ev.target.value)}></input>
                        </div>
                       
                        <div className='input-div'>
                            <div className='text-div'>
                                <h2>Description</h2>
                                <h3><i>Some characteristics of the place and the location</i></h3>
                            </div>
                            <textarea  placeholder="Example: It's a very good and comfy place... beside the dragons and the skeletons" cols="20" rows="5" onChange={ev=>setDescription(ev.target.value) }></textarea>
                        </div>

                
                        <div className='input-div'>
                            <div className='text-div'>
                                <h2>Photos</h2>
                                <h3><i>More = better</i></h3>
                            </div>
                            <div style={{ width: '100%' }}>
                                <input placeholder="Paste a link here "></input>
                                <SubmitPhotoButton addPhoto={addPhotoByLink} /> 
                            </div>
                            <div className='img-input'> 
                                {addedPhotos.length > 0 && addedPhotos.map(link => (
                                    <>
                                        {link}
                                    </>
                                ))}
                                <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                                </button>
                            </div>
                        </div>

                        
                       
                        
                        <div className='text-div'>
                            <h2>Perks</h2>
                            <h3><i>Select all the perks of your place</i></h3>
                            <Perks selected={perks} onChange={setPerks} />
                        </div>
                        

                        <div className='text-div'>
                                <h2>House rules</h2>
                                <h3><i>Things that the clients can´t do</i></h3>
                        </div>
                        <div className='input-div'>
                            
                            <textarea  placeholder="Example: Don't go into the lava pit or Don't let your Intellect Devour inside" cols="20" rows="5" onChange={ev=>setHouseRules(ev.target.value)}></textarea>
                        </div>

                        <div className='text-div'>
                                <h2>Check in & Check out / Number Guests</h2>
                                <h3><i>House rules, etc</i></h3>
                        </div>
                        <div className='input-div-check'>
                        
                             <div className='input-time-div'>
                                 <p>Check In</p>
                                 <input type="time" onChange={ev=>setCheckIn(ev.target.value)}></input> 
                             </div>

                             <div className='input-time-div'>
                                 <p>Check Out</p>
                                 <input type="time" onChange={ev=>setCheckOut(ev.target.value)}></input> 
                             </div>

                             <div className='input-time-div' >
                                 <p>Max number of guests</p>
                                 <input onChange={handleNumberChange} style={{textAlign:'center'}}  type="number" value={numberGuests}></input> 
                             </div>
                        </div>

                        <button>aaaaaaaaaa</button>
                </form>
            )}
            
        </>

    );
}