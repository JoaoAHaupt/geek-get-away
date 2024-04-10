import { Link, useParams } from 'react-router-dom';
import	{SubmitPhotoButton} from '../../components/SubmitPhotoButton/index'
import './styles.css'
import { useState } from 'react';

export const PlacesPage = () =>{
    const {action} = useParams();
    const [numberGuests, setNumberGuests] = useState(1);

    const handleNumberChange = (event) => {
        let newNumber = parseInt(event.target.value);
        if (newNumber > 10000) {
            newNumber = 10000;
        }
        else if(newNumber < 1){
            newNumber = 1;
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

                        
                       
                        
                        <div className='text-div'>
                            <h2>Perks</h2>
                            <h3><i>Select all the perks of your place</i></h3>
                        </div>
                        <div >
                            
                            <label className='checkbox-perk'>
                                <input type="checkbox"/>
                                <span>Magic</span>

                                <svg height="30px" width="30px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <style type="text/css"></style>
                                        <g>
                                            <path class="st0" d="M256,0C114.605,0.015,0.015,114.594,0,256C0.015,397.391,114.605,511.985,256,512 c141.395-0.015,255.985-114.609,256-256C511.985,114.594,397.395,0.015,256,0z M411.099,100.904 c12.12,12.126,22.795,25.66,31.824,40.315h-40.135H322.27l-40.259-69.723l-20.027-34.689 C320.22,38.378,372.666,62.496,411.099,100.904z M180.86,340.745h-71.642l35.823-62.047L180.86,340.745z M109.219,171.255h71.642 l-35.818,62.047L109.219,171.255z M158.148,256l48.929-84.745h97.859L353.859,256l-48.922,84.745h-97.859L158.148,256z M366.973,278.698l35.815,62.047h-71.642L366.973,278.698z M331.146,171.255h71.642l-35.815,62.047L331.146,171.255z M291.819,148.55h-71.638L256,86.503L291.819,148.55z M100.9,100.904c38.434-38.408,90.878-62.526,149.114-64.097l-20.026,34.689 l-40.244,69.723h-80.526H69.076C78.106,126.564,88.78,113.03,100.9,100.904z M36.657,256c0.008-37.899,9.58-73.471,26.456-104.54 l20.094,34.802L123.467,256l-40.259,69.723l-20.094,34.801C46.236,329.463,36.664,293.891,36.657,256z M100.9,411.096 c-12.12-12.126-22.802-25.667-31.824-40.33h40.143h80.526l40.244,69.738l20.026,34.689 C191.786,473.622,139.334,449.504,100.9,411.096z M220.181,363.434h71.638L256,425.482L220.181,363.434z M411.099,411.096 c-38.434,38.408-90.886,62.526-149.115,64.097l20.027-34.689l40.259-69.738h80.518h40.135 C433.902,385.429,423.219,398.97,411.099,411.096z M428.796,325.723L388.541,256l40.255-69.738l20.09-34.794 c16.878,31.061,26.45,66.641,26.458,104.532c-0.008,37.884-9.58,73.456-26.458,104.517L428.796,325.723z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>

                            </label>
                            <label className='checkbox-perk'>
                                <input type="checkbox"/>
                                <span>Monster pet Friendly</span>
                                <svg height="30px" width="30px" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <title>monster-skull</title>
                                        <path d="M20.624 5.42c-0.707-0.58-1.541-1.011-2.519-1.267-0.187-0.231-0.411-0.43-0.663-0.588-0.623-1.288-1.424-2.596-1.424-2.596s-0.8 1.307-1.423 2.595c-0.215 0.135-0.41 0.299-0.578 0.487-1.162 0.232-2.132 0.695-2.939 1.351-6.017-0.988-11.433 5.057-9.516 11.428 0.771 2.562 4.546 4.208 6.506 3.134-3.694 0.006-4.792-4.007-3.65-6.791 0.73-1.779 2.011-2.784 3.783-2.794-0.587 2.2-0.797 4.817-0.797 7.625h4.405c-0.105 0.75-0.151 1.563-0.157 2.413-0.102 0.919 0.559 4.765 0.559 4.765s1.887-3.121 2.23-4.136c0.384 1.498 1.424 4.285 1.424 4.285s1.030-2.76 1.418-4.263c0.362 1.037 2.222 4.114 2.222 4.114s0.682-3.963 0.554-4.805c-0.007-0.836-0.053-1.635-0.157-2.374h4.372c0-2.808-0.21-5.425-0.796-7.624 1.841-0.041 3.168 0.969 3.917 2.793 1.142 2.784 0.045 6.797-3.65 6.791 1.96 1.073 5.735-0.572 6.506-3.134 1.929-6.41-3.566-12.49-9.627-11.409zM11.99 11.264c0.555 0.59 1.343 1.012 2.444 1.201 0 0.002 0 0.003 0 0.005 0 0.839-0.68 1.519-1.519 1.519s-1.519-0.68-1.519-1.519c0-0.491 0.233-0.928 0.595-1.205zM20.553 12.469c-0 0.839-0.68 1.519-1.519 1.519s-1.519-0.68-1.519-1.519c0-0.019 0.001-0.038 0.001-0.057 1.026-0.222 1.759-0.663 2.274-1.26 0.11 0.063 0.212 0.14 0.302 0.228l0.001 0.003c0.001-0 0.001-0.001 0.002-0.001 0.283 0.276 0.459 0.661 0.459 1.087zM7.131 28.033c-0.737 2.75 3.066 3.588 3.758 1.007 0.278-1.038-0.252-6.577-0.252-6.577s-3.228 4.532-3.506 5.57zM20.954 22.463c0 0-0.529 5.539-0.252 6.577 0.692 2.581 4.495 1.743 3.758-1.007-0.278-1.038-3.506-5.57-3.506-5.57zM17.467 23.943c0 0-1.025 3.982-0.942 4.772 0.207 1.964 3.080 1.79 2.859-0.302-0.083-0.79-1.917-4.47-1.917-4.47zM12.318 28.413c-0.221 2.092 2.652 2.266 2.859 0.302 0.083-0.79-0.942-4.772-0.942-4.772s-1.834 3.68-1.917 4.47z"></path>
                                    </g>
                                </svg>

                            </label>
                            <label className='checkbox-perk'>
                                <input type="checkbox"/>
                                <span>Private dragon parking spot</span>

                                <svg height="30px" width="30px" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <title>dragon</title>
                                        <path d="M29.618 14.609h0c-2.916-0.277-5.098-1.914-5.821-4.221-0.416-1.324-2.062-2.281-3.957-2.861-2.037-5.066-3.416-7.824-9.806-7.101 2.295 1.796 4.134 4.205 5.075 6.415-1.843-0.529-3.573-0.808-5.182-0.877-3.508-0.769-7.443 0.817-8.6 4.557v20.114h13.274c-8.696-3.148-10.981-19.033-1.86-15.998-0.16 0.474-0.322 0.928-0.477 1.347 2.049 5.319 7.099 10.027 10.576 10.495 0.414 0.015 1.056-0.17 1.8-0.522-0.139-0.044-0.273-0.102-0.401-0.176-0.777-0.448-1.166-1.368-1.14-2.434-0.734 0.386-1.511 0.447-2.129 0.090-0.915-0.528-1.21-1.812-0.823-3.14-0.707 0.173-1.381 0.057-1.821-0.383-0.554-0.553-0.595-1.474-0.193-2.368-0.229-0.038-0.434-0.135-0.594-0.295-0.549-0.549-0.36-1.628 0.423-2.41s1.863-0.971 2.413-0.422c0.241 0.241 0.34 0.584 0.309 0.959 0.698-0.164 1.36-0.046 1.795 0.389 0.384 0.383 0.521 0.944 0.435 1.549 0.534-0.141 1.060-0.101 1.504 0.156 0.583 0.336 0.914 0.979 0.978 1.745 0.949-0.632 2.006-0.794 2.824-0.322 0.965 0.557 1.333 1.842 1.048 3.229 1.497-2.081 2.158-4.725 0.351-7.515z"></path>
                                    </g>
                                </svg>
                            </label>

                            
                        </div>

                        <div className='text-div'>
                                <h2>House rules</h2>
                                <h3><i>House rules, etc</i></h3>
                        </div>
                        <div className='input-div'>
                            
                            <textarea  placeholder="Example: It's a very good and comfy place... beside the dragons and the skeletons" cols="20" rows="5"></textarea>
                        </div>

                        <div className='text-div'>
                                <h2>Check in & Check out / Number Guests</h2>
                                <h3><i>House rules, etc</i></h3>
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