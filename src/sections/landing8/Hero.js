import React, { useState, useContext } from "react";
import styled from "styled-components";

import { Container, Row, Col, FormControl } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Badge,
} from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";

import imgHero from "../../assets/image/png/landing4-hero-img.png";

const ImgRight = styled(Box)``;

const BoxPrice = styled(Box)`
  border-radius: 10px;
  background-color: #6565e9;
  padding-left: 25px;
  padding-right: 20px;
  padding-top: 13px;
  padding-bottom: 10px;
  max-width: 322px;
  min-width: 322px;
`;

const ProductQty = styled(Box)`
  min-width: 90px;
  max-width: 90px;
  height: 60px;
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  margin-right: 20px;

  input {
    height: 100%;
    width: 100%;
    padding-right: 27px;
    &:focus {
      box-shadow: none !important;
      border: none !important;
    }
  }
`;

const BtnGroup = styled(Box)`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  button {
    min-width: 27px;
    max-width: 27px;
    min-height: 29.5px;
    max-height: 29.5px;
    border: none;
    background: #f7f7fb;
    border-bottom: 1px solid #fff;

    &:last-child {
      border-bottom: 0;
    }
    &:focus {
      outline: none;
    }
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);
  const [qty, setQty] = useState(1);

  const handleIncQty = () => {
    setQty(qty + 1);
    gContext.incCartTotal();
  };

  const handleDecQty = () => {
    if (qty >= 1) {
      setQty(qty - 1);
      gContext.decCartTotal();
    }
  };

  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="secondary" className="position-relative">
        <div className="pt-5"></div>
        <Container>
          <Row className="align-items-center position-relative">
            <Col
              lg="5"
              className="position-static"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <ImgRight>
                <img src={imgHero} alt="" className="img-fluid" />
              </ImgRight>
            </Col>
            <Col lg="7">
              <div
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Box pt={[4, null, null, 0]}>
                  <Title color="light">
                    Enjoy every single
                    <br className="d-none d-sm-block" />
                    beat on headphone!
                  </Title>
                  <Text color="lightShade">
                    For iPhone, iPad, and Android users, be sure your product’s
                    firmware is up to date through the Bose connect app.
                  </Text>

                  <BoxPrice mt={4} mb={3}>
                    <Box className="d-flex align-items-center">
                      <Title color="light" mb="0!important" mr={3}>
                        $299
                      </Title>
                      <Box>
                        <Badge bg="success">Save 30% today</Badge>
                      </Box>
                    </Box>
                    <Text color="lightShade">Original price $399</Text>
                  </BoxPrice>

                  <div className="d-flex pt-2">
                    <ProductQty mr={3}>
                      <FormControl
                        type="number"
                        className="text-center"
                        value={qty}
                        onChange={() => {}}
                      />
                      <BtnGroup>
                        <button onClick={handleIncQty}>+</button>
                        <button onClick={handleDecQty}>-</button>
                      </BtnGroup>
                    </ProductQty>
                    <Button bg="warning" color="dark" mb={2}>
                      Add to Cart
                    </Button>
                  </div>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
