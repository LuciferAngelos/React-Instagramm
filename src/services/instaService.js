class instaService {
    constructor() {
        this._apiBase = 'http://localhost:3000'        //локальный сервер по умолчанию
    }

    // json-server src/posts.json - этой командой можно запустить джейсон сервер и указываем путь к файлу джейсон. Причем, лучше запустить сначала сервер, а потом приложуху

    getResource = async (url) => {        //создаём свой метод. Создание методов, как стрелочных функций - будет новая возможность. Запускаем функцию. Функция асинхронна
        const res = await fetch(`${this._apiBase}${url}`);     //обращаемся к серверу. Ждём ответа от сервера. В параметрах передаём данные из конструктора и url из аргумента
        if (!res.ok) {       //если результат ответ любой, кроме 200 ответа от сервера. .ok - ответ от сервера равный 200
            throw new Error(`Could not fetch ${url}; recieved ${res.status}`)       //если пришла ошибка, выкидываем ошибку по адресу и код ошибки

        }

        return await res.json()      //превращаем ответ сервера в джейсон формат. Await - говорим, что функция должна дождаться выполнения res.json(), и только потом вернуть результат. Получаем массив объектов

    }

    getAllPosts = async () => {     //стрелочная функция привязывает к конкретному классу и биндить не нужно
        const res = await this.getResource('/posts/')       //из джейсон файла получаем все посты
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('/posts/')

        return res.map(this._transformPosts)
    }

    //создаём дополнительный "трансформирующий" метод. В АПИ крупных проектов возможно будет слишком много данных, которые нам не нужны. Благодаря этому методу мы отфильтруем только те ключи, которые нам нужны

    _transformPosts = (posts) => {
        return {        //возвращаем новый объект
            src: posts.src,
            alt: posts.alt
        }
    }
}

export default instaService