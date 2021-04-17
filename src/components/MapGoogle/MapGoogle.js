import React from "react";
import styled, { keyframes } from "styled-components";
import GoogleMapReact from "google-map-react";

import { device } from "../../utils";
import iconPin from "../../assets/image/svg/map-marker.svg";

const keyBounce = keyframes`

  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-20px);
  }

`;

const MapStyled = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 50px;

  .pin {
    display: flex;
    align-items: center;
    width: 180px;
    color: var(--main-blue);
    animation: ${keyBounce} 0.5s infinite alternate;
  }

  @media ${device.lg} {
    margin-top: 0px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 47%;
  }
`;

const LocationPin = () => (
  <div className="pin">
    <img src={iconPin} className="pin-icon" alt="" />
  </div>
);

const MapGoogle = () => {
  const location = {
    lat: 23.761226,
    lng: 90.420766,
  };

  return (
    <>
      <MapStyled>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyBmGmeot5jcjdaJTvfCmQPfzeoG_pABeWo` }}
          defaultCenter={location}
          defaultZoom={12}
          className="h-100 w-100"
        >
          <LocationPin lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </MapStyled>
    </>
  );
};

export default MapGoogle;
