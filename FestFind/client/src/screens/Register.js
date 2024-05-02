import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';
import { Link } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setsuccess] = useState(false);

  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword
      };
  
      try {
        setLoading(true);
        const result = await axios.post('/api/users/register', user);
        setLoading(false);
        setsuccess(true);

        setName('');
        setEmail('');
        setPassword('');
        setCpassword('');

      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    } else {
      alert("Password not matched");
    }
  }

  return (
    <div className='register-container'>
      <img className='register-image' src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg' alt='Register' />
      <div className='register-box'>
        {loading && (<Loader/>)}
        {error && (<Error />)}
        {success && (<Success />)}
        <h1>Register</h1>
        <input type="text" className='form-control' placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} />
        <input type="email" className='form-control' placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" className='form-control' placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <input type="password" className='form-control' placeholder='confirm password' value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} />
        <button className='btn btn-primary rbtn' onClick={register}>Register</button>
        <Link to='/login'>
          <small>Уже сеть аккаунт?</small>
        </Link>
      </div>
    </div>
  );
}

export default Register;
