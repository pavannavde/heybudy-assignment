import React from 'react'
import twiter from '../assests/twitter-logo-4 1.svg'
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
        <p>Signup to Twitter</p>
      </div>
    </div>
  )
}

export default Login
