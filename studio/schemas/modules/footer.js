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
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'facebook',
            title: 'Facebook',
            initalValue: 'Facebook',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'facebookLink',
            title: 'Länk till Facebook',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'twitter',
            title: 'Twitter',
            initalValue: 'Twitter',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'twitterLink',
            title: 'Länk till Twitter',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'instagram',
            title: 'Instagram',
            initalValue: 'Instagram',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'instagramLink',
            title: 'Länk till Instagram',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'visitUs',
            title: 'Besök oss',
            initalValue: 'Besök oss',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'blockText',
            name: 'address',
            title: 'Adress till Iteam',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'addressLink',
            title: 'Länk till google maps för adressen',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'orgNumber',
            title: 'Organisationsnummer',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'orgNumberLink',
            title: 'Länk till organisationsnummer',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'contact',
            title: 'Kontakta oss',
            initalValue: 'Kontakta oss',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'contactTitle',
            title: 'Kontakt',
            initalValue: 'Kontakt',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'contactLink',
            title: 'Länk till Kontakt',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'applyForJob',
            title: 'Sök jobb',
            initalValue: 'Sök jobb',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'applyForJobLink',
            title: 'Länk till Sök jobb',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'applyJob',
            title: 'Spontanansökan',
            initalValue: 'Spontanansökan',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
        {
            type: 'string',
            name: 'mailToApplyJob',
            title: 'Mailadress för spontanansökan',
            validation: (Rules) =>
                Rules.required().error('Du behöver fylla i det här fältet'),
        },
    ]
}