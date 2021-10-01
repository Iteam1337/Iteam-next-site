
const remoteUrl = `https://iteam.se`
const localUrl = `http://localhost:3000`

export default function resolveProductionUrl(doc) {
    const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl

    switch (doc._type) {
        case 'newsPost':
            return `${baseUrl}/aktuellt/${doc.slug.current}`
        case 'coworker':
            return `${baseUrl}/about/${doc.slug.current}`
        case 'casePost':
            return `${baseUrl}/case/${doc.slug.current}`
        case 'openPositions':
            return `${baseUrl}/karriar/${doc.slug.current}`
        default:
            break;
    }

}