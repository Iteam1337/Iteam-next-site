import React, { useEffect } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { Title, Section, Box, Text, Anchor } from "../components/Core"
import PageWrapper from "../components/PageWrapper"
import Hero from "../sections/common/Hero"
import { usePreviewSubscription } from "../lib/sanity"
import { getClient } from "../lib/sanity.server"
import { formatPhoneNumber } from "../utils/helpers"
import { groq } from "next-sanity"
import BlockContent from "../components/BlockContent"

const FormStyled = styled.form``

const Book = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.bookPageQuery, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  })

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <PageWrapper footerDark>
        <Hero content={data.hero} />
        <Section>
          <Container>
            <Row className="align-items-center">
              <Col lg="5">
                <FormStyled
                  id="form"
                  name="contact1"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* You still need to add the hidden input with the form name to your JSX form */}
                  <input type="hidden" name="form-name" value="contact1" />

                  <Box mb={5}>
                    <Title>{data.title}</Title>
                  </Box>
                  <div
                    className="meetings-iframe-container"
                    data-src="https://meetings.hubspot.com/jonna-hjern/intromote-iteam?embed=true"
                  ></div>
                </FormStyled>
              </Col>
              <Col
                lg={6}
                className="offset-lg-1 order-lg-2 mt-5 mt-lg-0 pt-lg-5"
              >
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    {data.call.title}
                  </Title>
                  {data.call.contactPersons.map((contact, index) => (
                    <Title variant="card" fontSize="18px" key={index}>
                      {contact.fullname}, {contact.role}
                      <Text>
                        <Anchor
                          color="info"
                          href={`callto:${contact.phoneNumber}`}
                        >
                          {formatPhoneNumber(contact.phoneNumber)}
                        </Anchor>
                      </Text>
                    </Title>
                  ))}
                  <Anchor color="info" href="/about#medarbetare">
                    Fler kontaktuppgifter...
                  </Anchor>
                </Box>
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    {data.mail.title}
                  </Title>
                  {data.mail.emails.map((email, index) => (
                    <Text key={index}>
                      <Anchor color="info" href={`mailto:${email}`}>
                        {email}
                      </Anchor>
                    </Text>
                  ))}
                </Box>
                {data.visit.address.map((item) => (
                  <Box className="mb-5">
                    <Title variant="card" fontSize="24px">
                      {item.title}
                    </Title>
                    <BlockContent blocks={item.blockText.blockText} />
                  </Box>
                ))}
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  )
}

const bookPageQuery = groq`
*[_id == 'bookPage'][0]{
  ...,
  call {
    ...,
    contactPersons[] -> {
      fullname,
      phoneNumber,
      role,
    }
  }
}`

export async function getStaticProps({ params, preview = false }) {
  const data = await getClient(preview).fetch(bookPageQuery)

  if (!data) return { notFound: true }

  return {
    props: {
      preview,
      data,
    },
  }
}
export default Book
