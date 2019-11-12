class instaService {
    constructor() {
        this._apiBase = 'http://localhost:3000/'        //локальный сервер по умолчанию
    }

    getResource = async (url) => {        //создаём свой метод. Создание методов, как стрелочных функций - будет новая возможность. Запускаем функцию. Функция асинхронна
        const res = fetch(`${this._apiBase}${url}`);     //обращаемся к серверу. Ждём ответа от сервера. В параметрах передаём данные из конструктора и url из аргумента
        if (res.ok) {       //если результат ответ любой, кроме 200 ответа от сервера. .ok - ответ от сервера равный 200
            throw new Error(`Could not fetch ${url}; recieved ${res.status}`)       //если пришла ошибка, выкидываем ошибку по адресу и код ошибки

        }

        return await res.json()      //превращаем ответ сервера в джейсон формат. Await - говорим, что функция должна дождаться выполнения res.json(), и только потом вернуть результат

    }

    getAllPosts = async () => {     //стрелочная функция привязывает к конкретному классу и биндить не нужно
        const res = await this.getResource('/posts/')       //из джейсон файла получаем все посты
        return res;
    }
}

export default instaService