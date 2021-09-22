export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
        {
            type: 'string',
            name: 'follow',
            title: 'Följ oss',
            initalValue: 'Följ oss',
            validation: (Rules) =>
                Rules.required().error('Ange text för följ oss.'),
        },
        {
            type: 'string',
            name: 'facebook',
            title: 'Facebook',
            initalValue: 'Facebook',
            validation: (Rules) =>
                Rules.required().error('Ange text för facebook.'),
        },
        {
            type: 'string',
            name: 'facebookLink',
            title: 'Länk till Facebook',
            validation: (Rules) =>
                Rules.required().error('Ange länk till facebook.'),
        },
        {
            type: 'string',
            name: 'twitter',
            title: 'Twitter',
            initalValue: 'Twitter',
            validation: (Rules) =>
                Rules.required().error('Ange text för twitter.'),
        },
        {
            type: 'string',
            name: 'twitterLink',
            title: 'Länk till Twitter',
            validation: (Rules) =>
                Rules.required().error('Ange länk till twitter.'),
        },
        {
            type: 'string',
            name: 'instagram',
            title: 'Instagram',
            initalValue: 'Instagram',
            validation: (Rules) =>
                Rules.required().error('Ange text för instagram.'),
        },
        {
            type: 'string',
            name: 'instagramLink',
            title: 'Länk till Instagram',
            validation: (Rules) =>
                Rules.required().error('Ange lännk till instagram.'),
        },
        {
            type: 'string',
            name: 'visitUs',
            title: 'Besök oss',
            initalValue: 'Besök oss',
            validation: (Rules) =>
                Rules.required().error('Ange text till besök oss.'),
        },
        {
            type: 'blockText',
            name: 'address',
            title: 'Adress till Iteam',
            validation: (Rules) =>
                Rules.required().error('Fyll i adress till Iteam.'),
        },
        {
            type: 'string',
            name: 'addressLink',
            title: 'Länk till google maps för adressen',
            validation: (Rules) =>
                Rules.required().error('En länk till google maps saknas här.'),
        },
        {
            type: 'string',
            name: 'orgNumber',
            title: 'Organisationsnummer',
            validation: (Rules) =>
                Rules.required().error('Ange organisationsnummer här.'),
        },
        {
            type: 'string',
            name: 'orgNumberLink',
            title: 'Länk till organisationsnummer',
            validation: (Rules) =>
                Rules.required().error('Fyll i en länk till organisationsnummret.'),
        },
        {
            type: 'string',
            name: 'contact',
            title: 'Kontakta oss',
            initalValue: 'Kontakta oss',
            validation: (Rules) =>
                Rules.required().error('Text för kontakta oss.'),
        },
        {
            type: 'string',
            name: 'contactTitle',
            title: 'Kontakt',
            initalValue: 'Kontakt',
            validation: (Rules) =>
                Rules.required().error('Text för kontakt.'),
        },
        {
            type: 'string',
            name: 'contactLink',
            title: 'Länk till Kontakt',
            validation: (Rules) =>
                Rules.required().error('Lägg in en länk till kontakt här.'),
        },
        {
            type: 'string',
            name: 'applyForJob',
            title: 'Sök jobb',
            initalValue: 'Sök jobb',
            validation: (Rules) =>
                Rules.required().error('Ange text för sök jobb här.'),
        },
        {
            type: 'string',
            name: 'applyForJobLink',
            title: 'Länk till Sök jobb',
            validation: (Rules) =>
                Rules.required().error('Lägg in en länk till sök jobb.'),
        },
        {
            type: 'string',
            name: 'applyJob',
            title: 'Spontanansökan',
            initalValue: 'Spontanansökan',
            validation: (Rules) =>
                Rules.required().error('Text för spontanansökan.'),
        },
        {
            type: 'string',
            name: 'mailToApplyJob',
            title: 'Mailadress för spontanansökan',
            validation: (Rules) =>
                Rules.required().error('Ange länk till spontanansökan här.'),
        },
    ]
}