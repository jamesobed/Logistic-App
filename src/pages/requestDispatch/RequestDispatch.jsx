/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import './requestDispatch.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { Navbar, FormInput, Button, BackArrowButton } from '../../components';
import axios from '../../axios';

function RequestDispatch() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    pickup: '',
    destination: '',
    price: '',
    recipientPhoneNumber: ''
  });
  const [valid, setValid] = useState(false);
  const initialValidity = Object.keys({
    ...form
  }).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {});
  const [validities, setValidity] = useState(initialValidity);

  const validate = useCallback(() => {
    for (const key in validities) {
      if (!validities[key]) {
        setValid(false);
        return;
      }
    }
    setValid(true);
  }, [validities]);

  useEffect(() => {
    validate();
  }, [validities, validate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/order/request', {
        ...form,
        package: 'Unspecified',
        payment: 'cash'
      });
      if (res.status === 201) {
        toast.success('Order created successfully');
      } else {
        toast.error(res.data.msg);
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div className="request-dispatch">
      <Navbar />
      <div className="content">
        <div className="form-header">
          <BackArrowButton handleClick={navigate.bind(-1)} />
          <h1 className="form-title">Request a Rider</h1>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit} className="form">
            <FormInput
              label="Pick up Location"
              type="text"
              name="pickup"
              placeholder="Enter Pick up location"
              handleChange={handleChange}
              required={true}
              value={form.pickup}
              minLength={3}
              setValidity={setValidity}
            />
            <FormInput
              label="Drop off Location"
              type="text"
              name="destination"
              placeholder="Enter drop off location"
              handleChange={handleChange}
              required={true}
              value={form.destination}
              minLength={3}
              setValidity={setValidity}
            />
            <FormInput
              label="Drop off Phone Number"
              type="tel"
              name="recipientPhoneNumber"
              placeholder="Enter drop off phone number"
              handleChange={handleChange}
              required={true}
              value={form.recipientPhoneNumber}
              minLength={11}
              maxLength={11}
              setValidity={setValidity}
            />
            <FormInput
              label="Offer (NGN)"
              type="number"
              name="price"
              placeholder="Enter an amount"
              handleChange={handleChange}
              required={true}
              value={form.price}
              min={0}
              setValidity={setValidity}
            />
            <Button
              type="submit"
              disabled={!valid}
              handleClick={handleSubmit}
              className="request-btn">
              Order Ride
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestDispatch;
