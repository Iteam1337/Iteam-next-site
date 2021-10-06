import imageUrlBuilder from "@sanity/image-url"
import client from "../sanity-client"
const PNF = require("google-libphonenumber").PhoneNumberFormat
const phoneUtil = require("google-libphonenumber").PhoneNumberUtil.getInstance()

export const hexToRGBA = (hex) => {
  hex = hex.replace("#", "")
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return [r, g, b]
}

export const urlFor = (source) => {
  return imageUrlBuilder(client).image(source).url()
}

export const buildInternalUrl = (reference) => {
  if (reference.slug) {
    return `${getRouteNameFromPageType(reference._type)}/${
      reference.slug.current
    }`
  }

  return getRouteNameFromPageType(reference._type)
}

export const getRouteNameFromPageType = (contentType) => {
  switch (contentType) {
    case "mvpPage":
      return "mvp"
    case "xPage":
      return "iteamX"
    case "careerPage":
      return "karriar"
    case "about":
      return "about"
    case "coworker":
      return "about"
    default:
      return "404"
  }
}

/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */

export const filterDataToSingleItem = (data, preview) => {
  if (!Array.isArray(data)) return data

  return data.length > 1 && preview
    ? data.filter((item) => item._id.startsWith(`drafts.`)).slice(-1)[0]
    : data.slice(-1)[0]
}

export const formatPhoneNumber = (phoneNumber) => {
  const number = phoneUtil.parseAndKeepRawInput(phoneNumber, "SE")
  return phoneUtil.format(number, PNF.NATIONAL)
}
