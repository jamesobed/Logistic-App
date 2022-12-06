import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../pages';
import ClientSignUp from '../pages/signup/ClientSignUp';
import Login from '../pages/login/Login';
import RiderRegistration from '../pages/rider/RiderRegistration';
import CardDetails from '../components/cardDetails/CardDetails';
import { RequestDispatch } from '../pages';

const BaseRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<LandingPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<ClientSignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rider/registration" element={<RiderRegistration />} />
      <Route path="/carddetails" element={<CardDetails />} />
      <Route path="/order/place" element={<RequestDispatch />} />
    </Routes>
  );
};

export default BaseRoute;
