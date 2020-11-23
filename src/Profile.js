import { auth } from 'firebase';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
// import {currentUser} from "./firebase"

function Profile() {
    const [displayName, setdisplayName] = useState('');
    const [{user, basket}] = useStateValue()
    const history = useHistory();


    const Update = e => {
        // e.preventDefault();

        auth.currentUser.updateProfile({displayName: displayName,photoURL: "https://example.com/jane-q-user/profile.jpg"})
            .then(auth => {
                // history.push('/')
                console.log(displayName);
            })
            .catch(error => alert(error.message))
    }
    return (
        <div>
            <form>
                    <h5>name</h5>
                    <input type='text' value={displayName} onChange={e => setdisplayName(e.target.value)} />

                   

                    <button type='submit' onClick={Update} className='login__signInButton'>Update</button>
                </form>
        </div>
    )
}

export default Profile
