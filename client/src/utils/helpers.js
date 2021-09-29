import imageUrlBuilder from "@sanity/image-url"
import client from "../sanity-client"

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
    return `${getRouteNameFromPageType(reference._type)}/${reference.slug.current
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
