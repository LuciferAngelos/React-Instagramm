import React from 'react';
import InstaService from '../services/instaService'
import ErrorMessage from './Error'


class Palette extends React.Component{
    InstaService = new InstaService();  
    state = {
        error: false,
        photos: []
    }

    componentDidMount(){        //получаем фотографии только тогда, когда компонент отрендерился
        this.updatePhotos()
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    //делаем методы через стрелочную функцию, чтобы привязать компонент к контексту вызова и не использовать .bind(this)

    onError = () => {      
        this.setState({
            error: true
        })
    }

    //Short Object Notation - когда в аргументе название совпадает с ключом объекта, можно просто написать название ключа\аргумент
    
    onPhotosLoaded = (photos) => {
        this.setState({
            error: false,
            photos      //Short Object Notation
        })
    }

    renderItems(arr){
        return arr.map(item => {
            const {src, alt} = item;
            return(     //при каждом вызове возвращает кусок верстки
                <img src={src} alt={alt}></img>
            )
        })
    }

    render(){
        const {error, photos} = this.state;
        
        if(error){
            return <ErrorMessage />
        }

        const items = this.renderItems(photos)

        return(
            
            <div className='palette'>
                {items}
            </div>
        )

    }

}

export default Palette;
