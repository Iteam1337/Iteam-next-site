export default {
    name: 'previewCard',
    type: 'document',
    title: 'Förhandsvisning',
    fields: [
        {
            title: 'Rubrik',
            name: 'title',
            type: 'title',
        },
        {
            title: 'Kort beskrivning',
            name: 'description',
            type: 'text',
        },
        {
            name: 'Bild',
            type: 'image',
        },
    ],
};
