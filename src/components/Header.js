import React, { Component } from 'react';       /* при помощи деструктуризации получаем из библиотеки реакт только 1 объект */
import logo from '../logo.svg'
import { Link } from 'react-router-dom';      //внутри этого компонента находится метод использования переходов по адресам в браузере

class Header extends Component {
    render() {
        return (
            <header>
                <div className='container h-flex'>
                    <Link to='/' className='logo' >
                        <img src={logo} alt="" />
                    </Link>

                    <nav className='links'>
                        <ul>
                            <li>
                                <Link to="/" className='menu__links'>Лента</Link>
                            </li>
                            <li>
                                <Link to="/profile/" className='menu__links'>Профиль</Link>
                            </li>
                        </ul>

                    </nav>
                </div>
            </header>
        )
    }
}

export default Header

