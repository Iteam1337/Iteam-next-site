const remoteUrl = 'https://iteam.se'
const localUrl = 'http://localhost:3000'
const previewSecret = '1iyD685T7kOS'

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === 'localhost' ? localUrl : remoteUrl
  const previewUrl = new URL(baseUrl)

  let route = '/'
  switch (doc._type) {
    case 'newsPost':
    case 'newsPage':
      route = 'aktuellt'
      break
    case 'coworker':
      route = 'about'
      break
    case 'casePost':
    case 'casePage':
      route = 'case'
      break
    case 'openPositions':
    case 'careerPage':
      route = `karriar`
      break
    case 'bookPage':
      route = 'book'
      break
    case 'aboutPage':
      route = 'about'
    case 'scaleUpPage':
      route = 'scaleup'
    case 'mvpPage':
      route = 'mvp'
    case 'xPage':
      route = 'iteamX'
    default:
      break
  }
  previewUrl.pathname = '/api/preview'
  previewUrl.searchParams.append('secret', previewSecret)
  previewUrl.searchParams.append(
    'slug',
    doc._type === 'startPage' ? ' ' : `${route}/${doc?.slug?.current ?? ''}`
  )

  return previewUrl.toString()
}
