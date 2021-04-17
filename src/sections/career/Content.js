import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import GlobalContext from "../../context/GlobalContext";
import { device } from "../../utils";

import imgVideo from "../../assets/image/jpeg/video-image-2.jpg";

const IconButton = styled(Box)`
  cursor: pointer;
  font-size: 22px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: ${({ theme }) => theme.colors.light};
  width: 64px;
  height: 64px;
  @media ${device.sm} {
    width: 100px;
    height: 100px;
  }
  @media ${device.md} {
    width: 124px;
    height: 124px;
  }
`;

const Content = () => {
  const gContext = useContext(GlobalContext);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };

  return (
    <>
      <Section>
        <Container>
          <Row className="justify-content-center pb-5 mb-5">
            <Col lg="6">
              <Title variant="hero" className="mb-0">
                Kolla in hur vi har det
              </Title>
            </Col>
            <Col lg="6" className="pl-lg-5 d-flex align-items-end">
              <Text>
                Vi har kul nästan jämt! Kolla in vår snajsiga film och se om du kan motså att skicka en ansökan att börja här?
              </Text>
            </Col>
          </Row>
          <Box borderRadius={10} className="position-relative overflow-hidden">
            <img src={imgVideo} alt="" className="img-fluid" />
            <IconButton onClick={openVideoModal}>
              <i className="icon icon-triangle-right-17-2"></i>
            </IconButton>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Content;
