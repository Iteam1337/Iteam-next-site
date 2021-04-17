import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import { Box } from "../../components/Core";

import imgL1Brand1 from "../../assets/image/png/l1-brand1.png";
import imgL1Brand2 from "../../assets/image/png/l1-brand2.png";
import imgL1Brand3 from "../../assets/image/png/l1-brand3.png";
import imgL1Brand4 from "../../assets/image/png/l1-brand4.png";
import imgL1Brand5 from "../../assets/image/png/l1-brand5.png";

const Brand = styled(Box)`
  opacity: 0.7;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 1;
  }
`;

const Clients = () => (
  <>
    {/* <!-- Clients Brands Area --> */}
    <Box py={"30px"}>
      <Container>
        <Box
          className="d-flex justify-content-center justify-content-lg-between
         align-items-center flex-wrap"
          mx="-32px"
        >
          <Brand className="" py={3} mx={4}>
            <img src={imgL1Brand1} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={imgL1Brand2} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={imgL1Brand3} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={imgL1Brand4} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={imgL1Brand5} alt="" className="img-fluid" />
          </Brand>
        </Box>
      </Container>
    </Box>
  </>
);

export default Clients;
