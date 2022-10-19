import { Typography } from '../Core'

export const SkipLink = () => {
  return (
    <Typography.Anchor
      className="tw-z-9999 tw-absolute tw-left-1/4 tw-top-[-1000px] tw-right-1/4 tw-rounded-b-md tw-bg-gray-dark tw-p-4 tw-text-center tw-font-bold tw-text-white tw-opacity-0 focus-visible:tw-top-0 focus-visible:tw-opacity-100"
      href="#main-content"
    >
      Hoppa till innehåll
    </Typography.Anchor>
  )
}
