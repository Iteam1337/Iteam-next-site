export default {
    name: 'scaleUp',
    type: 'document',
    title: 'Scale up',
    fields: [
        {
            type: 'hero',
            name: 'hero',
            title: 'Hero'
        },
        {
            type: 'sectionWithImageAndCta',
            name: 'sectionWithImageAndCtaFirst',
            title: 'Sektion för titel, text, cta och bild',
            options: {
                collapsible: true,
            },
        },
        {
            type: 'sectionWithCtaAndTextGrid',
            name: 'sectionWithCtaAndTextGrid',
            title: 'Sektion för titel, text, cta och text grid',
            options: {
                collapsible: true,
            },
        },
        {
            type: 'textWithTags',
            name: 'textWithTagsFirst',
            title: 'Text med taggar',
            options: {
                collapsible: true,
            },
        },
        {
            type: 'sectionWithImage',
            name: 'sectionWithImage',
            title: 'Sektion med title, text och bild',
            options: {
                collapsible: true,
            },
        },
        {
            type: 'textWithTags',
            name: 'textWithTagsSecond',
            title: 'Text med taggar',
            options: {
                collapsible: true,
            },
        },
        {
            type: 'sectionWithImageAndCta',
            name: 'sectionWithImageAndCtaSecond',
            title: 'Sektion för titel, text, cta och bild',
            options: {
                collapsible: true,
            },
        },
        {
            type: 'textWithTags',
            name: 'textWithTagsThirs',
            title: 'Text med taggar',
            options: {
                collapsible: true,
            },
        },
        {
            type: 'carousel',
            name: 'carousel',
            options: {
                collapsible: true,
            },
        },
        {
            type: 'scaleUpForm',
            name: 'scaleUpForm',
            options: {
                collapsible: true
            }
        }
    ]
}