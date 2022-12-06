import React from 'react';
import './riderRegistration.scss';
import loginImg from '../../assets/loginImg.png';
import logo from '../../assets/logoImg.png';
import formIcon from '../../assets/form_Icon.svg';
import uploadIcon from '../../assets/upload.svg';
import passwordIcon from '../../assets/password.svg';
const riderRegistration = () => {
  return (
    <div className="rider-registration">
      <div className="rider-banner">
        <div className="rider-banner-overlay"></div>
        <img src={loginImg} alt="img" />
        <p>Delivery service just got easier, elegant & superb with Dispatch Buddy</p>
      </div>
      <div className="rider-registration-page">
        <div className="rider-registration-logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div>
          <h3>Signup Up as a Rider</h3>
          <form className="rider-registration-form">
            <div className="rider-registration-form-input">
              <label>Name</label>
              <div className="form_wrapper">
                <img src={formIcon} alt="icon" />
                <input placeholder="Enter your name" type="text" />
              </div>
            </div>

            <div className="rider-registration-form-input">
              <label>Phone Number</label>
              <div className="form_wrapper">
                <img src={formIcon} alt="icon" />
                <input type="tel" placeholder="Enter your phone number" />
              </div>
            </div>

            <div className="rider-registration-form-input">
              <label>Email</label>
              <div className="form_wrapper">
                <img src={formIcon} alt="icon" />
                <input type="text" placeholder="Enter your email" />
              </div>
            </div>

            <div className="rider-registration-form-input">
              <label>City</label>
              <div className="form_wrapper">
                <select>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                </select>
              </div>
            </div>

            <div className="rider-registration-form-input">
              <label>Bike Documents</label>
              <div className="form_wrapper fileClass">
                <button className="fileBtn" type="button">
                  <img src={uploadIcon} alt="icon" />
                  <input type="file" className="custom-file-input"></input>
                </button>
              </div>
            </div>

            <div className="rider-registration-form-input">
              <label>Valid ID Card</label>
              <div className="form_wrapper fileClass">
                <button className="fileBtn" type="button">
                  <img src={uploadIcon} alt="icon" />
                  <input type="file" className="custom-file-input"></input>
                </button>
              </div>
            </div>

            <div className="rider-registration-form-input">
              <label>Passport Photo</label>
              <div className="form_wrapper fileClass">
                <button className="fileBtn" type="button">
                  <img src={uploadIcon} alt="icon" />
                  <input type="file" className="custom-file-input"></input>
                </button>
              </div>
            </div>

            <div className="rider-registration-form-input">
              <label>Password</label>
              <div className="form_wrapper">
                <img src={passwordIcon} alt="icon" />
                <input type="text" placeholder="Enter your password" />
              </div>
            </div>

            <div className="rider-registration-form-input">
              <label>Confirm Password</label>
              <div className="form_wrapper">
                <img src={passwordIcon} alt="icon" />
                <input type="text" placeholder="Enter your password" />
              </div>
            </div>

            <div className="rider-registration-form-input">
              <button type="submit" className="signUpBtn">
                Sign Up
              </button>
            </div>

            <div className="rider-registration-form-login-link">
              <p>
                <span style={{ color: '#012A4A' }}>Already have an account? </span>
                <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default riderRegistration;
