import React, { Component } from 'react';
import Post from './Post'


export default class Posts extends Component {
    render() {
        return (
            <div className='left'>
                <Post src='https://cdn.images.express.co.uk/img/dynamic/151/750x445/1138008.jpg' alt='inst' />      {/* src & alt - props */}
                <Post src='https://www.sheffield.ac.uk/polopoly_fs/1.532567!/image/sun-sky865.jpg' alt='inst' />
            </div>
        )
    }
}