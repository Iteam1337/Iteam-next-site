import React from 'react'
import styled from 'styled-components'

import { Title, Box, Typography } from '../Core'

import { device } from '../../utils'

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
const FrameStyled = styled.div`
  max-width: 484px;
  margin: 0 auto;
`

const HubspotForm = ({
  value,
  title = 'Boka intromöte direkt i kalendern',
}) => {
  React.useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    script.async = true
    document.body.appendChild(script)
    script.addEventListener('load', () =>
      document
        .querySelector('iframe')
        .setAttribute('title', 'Boka intromöte direkt i kalendern')
    )
  }, [])

  return (
    <FormStyled
      name={value}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Box>
        <Typography.H2>{title}</Typography.H2>
      </Box>
      <input type="hidden" name="form-name" value={value} />
      <FrameStyled
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/jonna-hjern/intromote-iteam?embed=true"
      />
    </FormStyled>
  )
}

export default HubspotForm
