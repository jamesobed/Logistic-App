import React from 'react';
import Google from '../../../assets/svg/Google.svg';
import Facebook from '../../../assets/svg/Facebook.svg';
import Twitter from '../../../assets/svg/Twitter.svg';
import LinkedIn from '../../../assets/svg/linkedin.svg';
import dispatchBuddy from '../../../assets/svg/dispatchBuddy.svg';

import { FooterStyles, FooterTopStyles, FooterBottomStyles } from './FooterStyles';

function Footer() {
  return (
    <FooterStyles>
      <FooterTopStyles>
        <a href="" className="footerLogo">
          <img src={dispatchBuddy} alt="dispatchBuddy" />
        </a>
        <div className="menu">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">FAQ</a>
          <a href="">Contact Us</a>
        </div>
        <div className="social">
          <div>
            <a href="">
              {' '}
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="">
              {' '}
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="">
              {' '}
              <img src={Google} alt="Google" />
            </a>{' '}
          </div>
        </div>
      </FooterTopStyles>
      <FooterBottomStyles>
        <p>© 2022 All rights reserved</p>
        <div className="privacy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Conditions</a>
          <a href="#">Legal</a>
          <a href="#">Help</a>
        </div>
        <p>English version</p>
      </FooterBottomStyles>
    </FooterStyles>
  );
}

export default Footer;
