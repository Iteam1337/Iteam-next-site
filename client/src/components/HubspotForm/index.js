import React from 'react'

import { Box, Typography } from '../Core'

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
    <form
      name={value}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="tw-w-full tw-rounded-md tw-bg-gray-blue tw-px-0 tw-pt-[40px] tw-pb-0 tw-text-center sm:tw-px-[10px] sm:tw-pb-[50px] sm:tw-pt-[53px]"
    >
      <Box>
        <Typography.H2>{title}</Typography.H2>
      </Box>
      <input type="hidden" name="form-name" value={value} />
      <div
        className="meetings-iframe-container tw-mx-auto tw-my-0 tw-max-h-[640px] tw-max-w-[484px]"
        data-src="https://meetings.hubspot.com/jonna-hjern/intromote-iteam?embed=true"
      />
    </form>
  )
}

export default HubspotForm
