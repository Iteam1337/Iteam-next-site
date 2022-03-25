import React, { useState } from "react"
import styled from "styled-components"

import { Title, Box, Button } from "../Core"

import { device } from "../../utils"

const FormStyled = styled.form`
  padding: 40px 30px;
  @media ${device.sm} {
    padding: 53px 58px 50px;
  }
  box-shadow: ${({ theme }) => `0 20px 61px ${theme.colors.shadow}`};
  border-radius: 10px;
  background-color: #f7f7fb;
  width: 100%;
  text-align: center;
`

const HubspotForm = ({
  value,
  title = "Boka intromöte direkt i kalendern",
}) => {
  const [formVisible, setFormVisible] = useState(false)
  React.useEffect(() => {
    if (!formVisible) return
    const script = document.createElement("script")
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
    script.async = true
    document.body.appendChild(script)
  }, [formVisible])

  return (
    <FormStyled
      name={value}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Box>
        <Title>{title}</Title>
      </Box>
      { formVisible ? (<>
        <input type="hidden" name="form-name" value={value} />
        <div
          className="meetings-iframe-container"
          data-src="https://meetings.hubspot.com/jonna-hjern/intromote-iteam?embed=true"
        />
      </>
) : (
        <Button onClick={() => setFormVisible(true)}>Hitta tid i vår kalender</Button>
)}
    </FormStyled>
  )
}

export default HubspotForm
