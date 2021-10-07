const remoteUrl = `https://iteam.se`
const localUrl = `http://localhost:3000`
const previewSecret = '1iyD685T7kOS'

export default function resolveProductionUrl(doc) {
    const baseUrl =
        window.location.hostname === 'localhost' ? localUrl : remoteUrl;
    const previewUrl = new URL(baseUrl);

    let route = '/';
    switch (doc._type) {
        case 'newsPost':
            route = `aktuellt`;
            break;
        case 'coworker':
            route = `about`;
            break;
        case 'casePost':
            route = `case`;
            break;
        case 'openPositions':
        case 'careerPage':
            route = `karriar`;
            break;

        default:
            break;
    }

    previewUrl.pathname = `/api/preview`;
    previewUrl.searchParams.append(`secret`, previewSecret);


    previewUrl.searchParams.append(
        'slug',
        `${route}/${doc?.slug?.current ?? ''}`
    );

    return previewUrl.toString();


}
