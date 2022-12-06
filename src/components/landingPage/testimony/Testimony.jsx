import React from 'react';
import { TestimonyStyles } from './TestimonyStyles';
import TestimonyGrid from './TestimonyGrid';
function Testimony() {
  return (
    <TestimonyStyles>
      <h2>What Our Clients Say About Us</h2>
      <TestimonyGrid />
    </TestimonyStyles>
  );
}

export default Testimony;
