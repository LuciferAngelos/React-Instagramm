import React from 'react';
import Header from './components/Header'
import Feed from './components/Feed'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route } from 'react-router-dom';

//{ BrowserRouter as Router } - данная запись означает, что мы берём компонент BrowserRouter и переименовываем его в Router."Синтаксис именованого импорта"

function App() {
  return (
    <Router>    {/* //импортируем наш компонент в роутер */}
      <div className="App">
        <Header />
        <Route path='/' component={Feed} exact />     {/* path='/' главная страница. component={Feed} - адрес главной страницы. Exact - указываем, что когда только слэш - рендерится только этот компонент. Если не указать, просто на страницу добавится компонент */}
        <Route path='/profile' component={Profile} exact />

      </div>
    </Router>
  );
}

export default App;


//npm i react-router-dom -save - устанавливаем реакт роутер. Флаг -save нужен для того, чтобы при билдинге проекта эта библиотека использовалась в билде.

// json-server src/posts.json - этой командой можно запустить джейсон сервер и указываем путь к файлу джейсон. Причем, лучше запустить сначала сервер, а потом приложуху
