import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { Container, Row, Col, FormControl } from 'react-bootstrap'

import { Button, Section, Box, Typography, Badge } from '../../components/Core'
import GlobalContext from '../../context/GlobalContext'

import imgHero from '../../assets/image/png/Sofa-Large.png'

const ImgRight = styled(Box)``

const BoxPrice = styled(Box)`
  border-radius: 10px;
  background-color: #6565e9;
  padding-left: 25px;
  padding-right: 20px;
  padding-top: 13px;
  padding-bottom: 10px;
  max-width: 322px;
  min-width: 322px;
`

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
`

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
`

const Hero = () => {
  const gContext = useContext(GlobalContext)
  const [qty, setQty] = useState(1)
  const price = 5000

  const handleIncQty = () => {
    setQty(qty + 1)
    gContext.incCartTotal()
  }

  const handleDecQty = () => {
    if (qty >= 1) {
      setQty(qty - 1)
      gContext.decCartTotal()
    }
  }

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
                  <Typography.H2 additionalClassName="tw-text-dark-gray">
                    Utbildning i öppen källkod och modern applikationsutveckling
                  </Typography.H2>
                  <Typography.Paragraph>
                    Gå en distanskurs i modern applikationsutveckling med några
                    av branschens bästa utvecklare, agila coacher och UX
                    designers
                  </Typography.Paragraph>

                  <BoxPrice mt={4} mb={3}>
                    <Box className="d-flex align-items-center">
                      <Typography.H1 additionalClassName="tw-text-white tw-mb-0 tw-mr-3">
                        {price}kr
                      </Typography.H1>
                    </Box>
                    <Typography.Paragraph light>
                      per person
                    </Typography.Paragraph>
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
                    {qty < 5 ? (
                      <Typography.ParagraphSmall>
                        Minst fem personer
                      </Typography.ParagraphSmall>
                    ) : (
                      <Button bg="warning" color="dark" mb={2}>
                        Boka för {qty * price} kr
                      </Button>
                    )}
                  </div>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Hero
