import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div className='post'>
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