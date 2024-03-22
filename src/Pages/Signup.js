import React from 'react'
import hero from '../assests/back-twitter 1.svg';
import google from '../assests/google-icon 1.svg';
import apple from '../assests/logo-apple 1.svg';
import twiter from '../assests/twitter-logo-4 1.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='signup'>
      <div className='rightDiv'>
      <img src={hero} alt='hero'/>
      </div>
        <div className='leftDiv'>
          <img src={twiter} alt='logo'/>
         <h1>Happening Now</h1>
         <h3>Join Twitter Today</h3>
         <div className='btn-div'>
          <button><img src={google} alt="g-icon"/>Sign up with Google</button>
          <button><img src={apple} alt="a-icon"/>Sign up with Apple</button>
          <button onClick={()=>navigate('/register')}>Sign up with Phone or Email</button>
         </div>
         <p>By singing up you agree to the <span>Terms of Service</span> and <span>Privacy policy</span>,
         including <span>Cookie Use</span></p>
         <p>Already have an account?<Link to='/login'>Login</Link></p>
        </div>   
    </div>
    <div className='footerDiv'>
    <p>About</p>
    <p>Help Center</p>
    <p>Terms of Service</p>
    <p>Privacy Policy</p>
    <p>Cookie Policy</p>
    <p>Ads info</p>
    <p>Blog</p>
    <p>Status</p>
    <p>Careers</p>
    <p>Brand Resources</p>
    <p>Advertising</p>
    <p>Marketing</p>
    <p>Twitter for Business</p>
    <p>Developers</p>
    <p>Directory</p>
    <p>Settings</p>
    <p>© 2021 Twitter, Inc.</p>
    </div>
    </>
  )
}

export default Signup
