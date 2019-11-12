import React, { Component } from 'react';
import InstaService from '../services/instaService'


export default class Posts extends Component {
    InstaService = new InstaService();      //вызываем новый объект класса
    state = {       //состояние
        posts: [],      //посты
        error: false    //в случае ошибок сервера, к примеру
    };

    //создаём механизм для того, чтобы выполнялся запрос на сервер ТОЛЬКО ТОГДА, когда компонент создался

    //LifeCycleHooks - хуки жизненного цикла
    // 4 состояния:
    // 1. компонент появился - componentWillMount()
    // 2. компонент обновился - componentDidUpdate() 
    // 3. компонент исчезает со страницы\"умирает" - componentWillUnmount()
    // 4. компонент выдаёт критическую ошибку - componentDidCatch()

    componentDidMount(){       //компонент появился на странице и после этого выполняется метод updatePosts/
        //Т.е., компонент прогружается, появляется на странице и только после этого мы получаем все посты, then обновляем состояние компонента через .then(this.onPostsLoaded) и выкидываем ошибки, в случае ошибок
        this.updatePosts()
    }

    updatePosts(){      //обновляем посты
        this.InstaService.getAllPosts()     //получаем все посты из джейсона через ИнстаСервис. Получаем промис
        .then(this.onPostsLoaded)       //передаём в then данные из метода onPostsLoaded. 
        .catch(this.onError)        //обрабатываем ошибку и запишем в state.error
    }

    onPostsLoaded = (posts) => {
        this.setState({     //обновляем состояние
            posts: posts,       //записываем постс в постс
            error: false        //если никаких ошибок, то так же остаётся фолс
        });
    }

    onError = (err) => {
        this.setState({
            error: true
        })

        console.log(err);
    }


    render() {
        return (
            <div className='left'>











                {/* <Post src='https://cdn.images.express.co.uk/img/dynamic/151/750x445/1138008.jpg' alt='inst' />      {/* src & alt - props */}
                {/* /* <Post src='https://www.sheffield.ac.uk/polopoly_fs/1.532567!/image/sun-sky865.jpg' alt='inst' /> захардкоденная структура */} 
            </div>
        )
    }
}