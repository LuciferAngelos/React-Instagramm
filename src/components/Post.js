import React, { Component } from 'react';
import User from './User'

class Post extends Component {
    render() {
        return (
            <div className='post'>
                <User
                    src='https://thumbs-prod.si-cdn.com/IjbgoCcHvUa6ISjPAvS8T6DTHA8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg'
                    alt='Mikhail Ivanov'
                    name='Mikhail Ivanov'
                    min={true} /> {/* //можно просто указать min */}
                <img src={this.props.src} alt={this.props.alt} />
                <div className='post__name'>
                    Some account
                </div>
                <div className='post__descr'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, quia fugiat voluptatibus tempore impedit laboriosam iure necessitatibus. Modi et itaque nulla, ipsum, aspernatur optio, maiores laboriosam quas voluptatem omnis dolorem!
                </div>
            </div>
        )
    }
}

export default Post

/* props - это то, что описывает компонент */