import React from 'react'
import User from './User'
import Palette from './Palette';

const Profile = () => {
    return(
        <div className='container profile'>
            <User
                    src='https://thumbs-prod.si-cdn.com/IjbgoCcHvUa6ISjPAvS8T6DTHA8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg'
                    alt='Mikhail Ivanov'
                    name='Mikhail Ivanov'
             />
            <Palette/>
        </div>
    )
}

export default Profile;