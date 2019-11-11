import React, { Component } from 'react';       /* при помощи деструктуризации получаем из библиотеки реакт только 1 объект */
import logo from '../logo.svg'

class Header extends Component {
    render() {
        return (
            <header>
                <div className='container h-flex'>
                    <a href="#" className='logo' >
                        <img src={logo} alt="" />
                    </a>

                    <nav className='links'>
                        <ul>
                            <li>
                                <a href="#" className='menu__links'>Лента</a>
                            </li>
                            <li>
                                <a href="#" className='menu__links'>Профиль</a>
                            </li>
                        </ul>

                    </nav>
                </div>
            </header>
        )
    }
}

export default Header

