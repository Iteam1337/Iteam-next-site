
const remoteUrl = `https://iteamse.sanity.studio/`
const localUrl = `http://localhost:3000`

export default function resolveProductionUrl(doc) {
    console.log('DOCUMENT', doc._type)

    const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl

    switch (doc._type) {
        case 'newsPost':
            return `${baseUrl}/aktuellt/${doc.slug.current}`
        case 'coworker':
            return `${baseUrl}/about/${doc.slug.current}`
        case 'casePost':
            return `${baseUrl}/case/${doc.slug.current}`
        default:
            break;
    }

}