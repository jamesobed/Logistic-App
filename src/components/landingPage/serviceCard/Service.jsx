import React from 'react';
import { ServiceStyles } from './ServiceStyles';
import { DataArray } from './ServiceTextData';
function Service() {
  return (
    <ServiceStyles>
      <div className="serviceTop">
        <p className="title">Top Notch Services</p>
        <p className="serviceText">
          Quickly integrate powerful solutions that gives you more flexibility and control over your
          parcel shipping and logistics processes.
        </p>
      </div>
      {/* <ServiceGridStyles> */}
      <DataArray />
      {/* </ServiceGridStyles> */}
    </ServiceStyles>
  );
}

export default Service;
