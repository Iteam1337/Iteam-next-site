import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, A } from "../../components/Core";

import GlobalContext from "../../context/GlobalContext";

import { device } from "../../utils";
import imgVideo from "../../assets/image/jpeg/video-image.jpg";

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

const VideoCTA = () => {
  const gContext = useContext(GlobalContext);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };

  return (
    <>
      {/* <!-- VideoCTA Area --> */}
      <Section className="position-relative pb-0" bg="dark">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="7" xl="6">
              <div className="text-center pb-5">
                <Title color="light">Why Omega would be your best fit?</Title>
                <A
                  href="#"
                  className="video-link"
                  data-fancybox=""
                  onClick={openVideoModal}
                >
                  <Text color="lightShade">
                    Watch this 1 min video to learn about Omega.
                  </Text>
                </A>
              </div>
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

export default VideoCTA;
