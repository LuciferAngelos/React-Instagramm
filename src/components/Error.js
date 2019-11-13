import React from 'react';
import img from '../error.png';

const ErrorMessage = () => {        //в данном случае, если получаем ошибку, выведем картинку
   
    return(

    //<> </> - такая штука называется React Fragment. По-хорошему, реакт не сможет отрендерить, к примеру, подряд 2 дива. Эти 2 дива должны находиться в одном диве, т.е. в родителе. <> ... </> - такая запись позволяет сделать без лишних дивов
    <>

    <img src={img} alt='error' />
    <div></div>

    </>
    )
}

export default ErrorMessage;