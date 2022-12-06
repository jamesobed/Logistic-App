import React from 'react';
import './carddetails.scss';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CardDetails = () => {
  return (
    <div className="card_container">
      <div className="card_details">
        <div className="card_details__header">
          <Link to="/">
            <RiArrowLeftLine size={26} className="icon" />
            Back
          </Link>
          <h2>Card Details</h2>
        </div>
        <div className="card_details__body">
          <form className="card_details__body__form">
            <div className="card_details__body__form__group">
              <label htmlFor="card_number">Card Number</label>
              <br />
              <input type="text" name="card_number" id="card_number" placeholder="Card number" />
            </div>
            <div className="card_details__body__form__group">
              <label htmlFor="card_name">Card Name</label>
              <br />
              <input type="text" name="card_name" id="card_name" placeholder="Card name" />
            </div>
            <div className="card_details__body__form__group2">
              <div>
                <label htmlFor="expiry_date">Expiry Date</label>
                <br />
                <input type="text" name="expiry_date" id="expiry_date" placeholder="Expiry date" />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <br />
                <input type="text" name="cvv" id="cvv" placeholder="***" />
              </div>
            </div>
            <div className="card_details__footer">
              <button className="btn btn--primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
