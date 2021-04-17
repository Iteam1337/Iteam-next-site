import React from "react";
import { Box } from "../Core";

const Rating = ({ numStar = 4.5, color = "secondary", ...rest }) => {
  return (
    <>
      <Box color={color} {...rest}>
        {[...Array(5)].map((item, index) => {
          return index + 1 <= numStar ? (
            <i className="fas fa-star mr-1" key={index}></i>
          ) : index < numStar && numStar % parseInt(numStar) < 1 ? (
            <i className="fas fa-star-half-alt mr-1" key={index}></i>
          ) : (
            <i className="far fa-star mr-1" key={index}></i>
          );
        })}
      </Box>
    </>
  );
};

export default Rating;
