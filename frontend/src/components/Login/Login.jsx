import React from 'react'
import logo from '../../assets/Group 1.png'
import './Login.css'
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
              <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>
              <img src={logo} alt="logo" />
              <br />
              <br />
              Welcome User
              <br />
              <small>Login to your account</small>
            </header>
            <form action="#">
              <div className="field input-field">
                <div className="input-icon">
                  <FaEnvelope className="icon" />
                  <input type="email" placeholder="Email" className="input" />
                </div>
              </div>
              <div className="field input-field">
                <div className="input-icon">
                  <FaLock className="icon" />
                  <input type="password" placeholder="Password" className="input" />
                </div>
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">Forgot password?</a>
              </div>
             <Link to="/dashboard">
                    <div className="submit">
                       <input className="submit-btn" value="Login" type="submit" name="submit" id="" />
                    </div>
             </Link>
            
             </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
