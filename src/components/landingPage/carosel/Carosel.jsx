import React from 'react';
import { CaroselStyles } from './CaroselStyles';
import caroselRider from '../../../assets/svg/caroselRider.svg';

function Carosel() {
  return (
    <CaroselStyles>
      <img src={caroselRider} alt="" />
      <div className="caroselText">
        <p className="caroselText1">Quality riders & partners ready to deliver</p>
        <p className="caroselText2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis volutpat tortor
          ultricies tincidunt magna. Faucibus tempus pretium sed enim integer at aliquet a. Semper
          vel id lectus quis vitae, velit est. Orci mi sed dui viverra.
        </p>
      </div>
    </CaroselStyles>
  );
}

export default Carosel;
