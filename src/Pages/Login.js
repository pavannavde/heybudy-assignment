import React from 'react'
import twiter from '../assests/twitter-logo-4 1.svg'
import { Link } from 'react-router-dom'
const Login = () => {

  return (
    <div className='login'>
      <img src={twiter} alt='logo'/>
      <h1>Log in to Twitter</h1>
      <input type='text' className='input' placeholder='Phone number , email address '/>
      <input type='password'className='input' placeholder='Password'/>
      <button className='btn'>Log in</button>
      <div>
        <p>Forgot Password?</p>
        <Link to='/register'>Signup to Twitter</Link>
      </div>
    </div>
  )
}

export default Login
