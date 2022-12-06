import React, { useState } from 'react';
// import emailIcon from '../../assets/email_icon.svg';
import axios from 'axios';

import {
  Button,
  Header,
  InputField,
  LabelField,
  LastLine,
  LeftText,
  Logo,
  MainWrapper,
  OtherSide,
  RedText,
  SideImage
} from './ClientSignUpStyle';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const ClientSignUp = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const postData = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/client/register', {
        name,
        phoneNumber,
        email,
        password,
        confirmPassword
      })
      .then((response) => {
        console.log(response.data);
        // Handle data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MainWrapper>
      <SideImage>
        <LeftText>Delivery service just got easier, elegant & superb with Dispatch Buddy </LeftText>
      </SideImage>
      <OtherSide>
        <a href="/">
          <Logo src={logo} alt="logo" />
        </a>
        <Header>Sign Up as Customer</Header>
        <form>
          <LabelField>
            Name
            <InputField
              type="text"
              placeholder=" Enter your name"
              onChange={(e) => setName(e.target.value)}
            ></InputField>
          </LabelField>

          <LabelField>Phone Number</LabelField>
          <InputField
            type="text"
            placeholder="Enter your phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></InputField>

          <LabelField>Email</LabelField>
          <InputField
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          ></InputField>

          <LabelField>Password</LabelField>
          <input
            type="text"
            className="passIcon"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <LabelField>Confirm Password</LabelField>
          <input
            type="text"
            className="passIcon"
            placeholder="Enter your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>

          <Button type="submit" onClick={postData}>
            <span className="btnText">Sign Up</span>
          </Button>
        </form>
        <LastLine>
          Already have an account?{' '}
          <RedText>
            <Link to="/login" className="Link">
              Sign In{' '}
            </Link>
          </RedText>
        </LastLine>
      </OtherSide>
    </MainWrapper>
  );
};

export default ClientSignUp;
