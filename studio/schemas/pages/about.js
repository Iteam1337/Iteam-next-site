export default {
    name: 'aboutPage',
    type: 'document',
    title: 'Om oss',
    fields: [
        { type: 'hero', name: 'hero', title: 'Lägg till hero' },
        { type: 'titleWithText', name: 'titleWithText', title: 'Rubrik och tillhörande text' },
        { type: 'layoutImages', name: 'layoutImages', title: 'Ladda upp bilder' },
        { type: 'title', name: 'title', title: 'Rubrik för medarbetare' },
        { type: 'string', name: 'subTitle', title: 'Underrubrik för medarbetare' },
        {
            type: 'titleWithCTA', name: 'titleWithCTA', title: 'Text med CTA knapp', validation: (Rules) =>
                Rules.required().error('Lägg in en CTA sektion.'),
        }
    ]
}