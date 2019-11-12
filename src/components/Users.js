import React, { Component } from 'react';
import User from './User'

const Users = () => {
    return (
        <div className='right'>
            <User
                src='https://thumbs-prod.si-cdn.com/IjbgoCcHvUa6ISjPAvS8T6DTHA8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg'
                alt='Mikhail Ivanov'
                name='Mikhail Ivanov'
            />
            <div className='users__block'>
                <User
                    src='https://thumbs-prod.si-cdn.com/IjbgoCcHvUa6ISjPAvS8T6DTHA8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg'
                    alt='Mikhail Ivanov'
                    name='Mikhail Ivanov'
                    min={true} />
                <User
                    src='https://thumbs-prod.si-cdn.com/IjbgoCcHvUa6ISjPAvS8T6DTHA8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg'
                    alt='Mikhail Ivanov'
                    name='Mikhail Ivanov'
                    min={true} />
                <User
                    src='https://thumbs-prod.si-cdn.com/IjbgoCcHvUa6ISjPAvS8T6DTHA8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg'
                    alt='Mikhail Ivanov'
                    name='Mikhail Ivanov'
                    min={true} />
                <User
                    src='https://thumbs-prod.si-cdn.com/IjbgoCcHvUa6ISjPAvS8T6DTHA8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg'
                    alt='Mikhail Ivanov'
                    name='Mikhail Ivanov'
                    min={true} />

            </div>
        </div>
    )
}


export default Users