import { Typography } from '../Core'

const SkipLink = () => {
  return (
    <Typography.Anchor
      additionalClassName="tw-rounded-b-md tw-bg-gray-dark tw-opacity-0 tw-font-bold tw-text-center tw-text-white tw-absolute tw-left-1/4 tw-top-[-1000px] tw-right-1/4 tw-z-9999 tw-p-4 focus-visible:tw-top-0 focus-visible:tw-opacity-100"
      href="#main-content"
    >
      Hoppa till innehåll
    </Typography.Anchor>
  )
}

export default SkipLink
