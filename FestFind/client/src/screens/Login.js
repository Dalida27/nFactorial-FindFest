import React, { useState } from 'react';
import './Login.css'
import Loader from '../components/Loader';
import Error from '../components/Error';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function handleLogin() {
        const user = {
            email,
            password,
        };
        try {
            setLoading(true);
            const result = (await axios.post('/api/users/login', user)).data;
            setLoading(false);

            localStorage.setItem('currentUser', JSON.stringify(result));
            window.location.href='/home';

        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
        }
    }

    return (
        <div className="login-container">
            {loading && <Loader />}
            <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg" alt="Login Illustration" className="login-image"/>
            <div className='login-form'>
                {error && <Error />}
                <h1>Логин</h1>
                <input type="email" className='form-control' placeholder='email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className='form-control' placeholder='пароль...' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='btn btn-primary lgnbt' onClick={handleLogin}>Войти</button>
                <Link to='/register'>
                  <small>Нету аккаунта?</small>
                </Link>
            </div>
        </div>
    );
}

export default Login;
