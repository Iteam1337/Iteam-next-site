import React from "react";

import { Title, Box, Text } from "../../components/Core";

import img5Star from "../../assets/image/png/5star.png";
import img4Star from "../../assets/image/png/4star.png";

import imgR1 from "../../assets/image/jpeg/reviewer1.jpg";

const ReviewCard = ({
  className,
  stars = 5,
  image = imgR1,
  name,
  company,
  children,
  ...rest
}) => (
  <Box
    bg="light"
    minHeight={["320px", null, `403px`]}
    border="1px solid"
    borderColor="border"
    p="35px"
    pb="30px"
    borderRadius={10}
    className={`d-flex flex-column ${className}`}
    {...rest}
    aos="fade-left"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <div>
      <img
        src={stars === 5 ? img5Star : img4Star}
        alt=""
        className="img-fluid"
      />
    </div>
    <Text color="dark" mt={4} mb={3} className="font-italic">
      {children}
    </Text>
    <Box className={`d-flex justify-content-between mt-auto`}>
      <Box className="d-flex justify-content-center align-items-start" mr={3}>
        <img src={image} alt="" className="img-fluid" />
      </Box>
      <div className="flex-grow-1">
        <Title variant="card" mb={1}>
          {name}
        </Title>
        <Text fontSize="14px" fontWeight={400} lineHeight="1">
          {company}
        </Text>
      </div>
    </Box>
  </Box>
);

export default ReviewCard;
