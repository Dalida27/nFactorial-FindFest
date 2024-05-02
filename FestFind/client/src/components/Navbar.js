import React from "react";
import './Navbar.css';
import {Link } from 'react-router-dom';

function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    function logout(){
        localStorage.removeItem('currentUser')
        window.location.href='/login'
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="/home">FestFind</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="some">
                    <a href="/home">Мероприятия</a>
                    <a href="/aboutus">О Нас</a>
                </div>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-5">
                        {user ? (<>
                            <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Welcome {user.name}
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="/profile">Профиль</a>
                                <a class="dropdown-item" href="#" onClick={logout}>Выход</a>
                            </div>
                            </div>
                        </>) : (<>
                            <li class="nav-item active">
                                <a class="nav-link" href="/register">Регистрация</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Вход</a>
                            </li>
                        </>)}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;