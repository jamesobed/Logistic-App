/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import './login.scss';
import loginImg from '../../assets/loginImg.png';
import logo from '../../assets/logoImg.png';
// import formIcon from '../../assets/email_icon.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import axios from '../../axios';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/user/login', { ...form });
      if (res.status === 200) {
        Cookies.set('login', res.data.email, { expires: 7 });
        toast.success('Login successful');
        localStorage.setItem('token', res.data.record.token);

        let role, id;
        if (res.data.record.client) {
          role = res.data.record.client.role;
          id = res.data.record.client.id;
        }
        if (res.data.record.rider) {
          role = res.data.record.rider.role;
          id = res.data.record.rider.id;
        }

        if (role === 'rider') {
          localStorage.setItem('email', res.data.record.rider.email);
          localStorage.setItem('avatar', res.data.record.rider.avatar);
          localStorage.setItem('id', res.data.record.rider.id);
          window.location.replace(`/rider/dashboard/${id}`);
        }
        if (role === 'client') {
          localStorage.setItem('email', res.data.record.client.email);
          localStorage.setItem('avatar', res.data.record.client.avatar);
          localStorage.setItem('id', res.data.record.client.id);
          window.location.replace(`/user/dashboard/${id}`);
        }
      } else {
        toast.error(res.data.msg);
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div className="login-container">
      <div className="login-banner">
        <img className="loginImg" src={loginImg} alt="" />
        <div className="login-text-container">
          <h3 className="login-text">
            Delivery service just got easier, elegant & superb with Dispatch Buddy
          </h3>
        </div>
      </div>
      <div className="login-form-container">
        <div className="logo">
          <a href="/">
            <img className="logoImg" src={logo} alt="" />
          </a>
        </div>
        <div className="form-container">
          <h3>Login</h3>
          <div className="form-group">
            <form action="">
              <div className="input-form">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <br />
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  value={form.email}
                  minLength={3}
                  maxLength={250}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="input-form">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <br />
                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  id="password"
                  value={form.password}
                  minLength={3}
                  maxLength={250}
                  onChange={handleChange}
                />

                <br />
                <a href="/">Forgot password</a>
                <button className="btn" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="create-text">
          Don't have an account?{' '}
          <Link to="/rider/registration" style={{ textDecoration: 'none' }}>
            <span className="link-s">Create Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
