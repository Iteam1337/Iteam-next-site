import S from '@sanity/desk-tool/structure-builder';

export default () =>
    S.list()
        .title('Innehåll')
        .items([
            S.listItem()
                .title('Sidor')
                .child(
                    S.list()
                        .title('Sidor')
                        .items([
                            S.listItem()
                                .title('Case')
                                .child(
                                    S.list()
                                        .title('Case')
                                        .items([
                                            S.listItem()
                                                .title('Case landningssida')
                                                .child(
                                                    S.document().schemaType('casePage').documentId('casePage')
                                                ),
                                            S.divider(),
                                            S.listItem()
                                                .title('Case')
                                                .child(
                                                    S.documentTypeList('casePost').title('Alla case')
                                                )
                                        ])
                                ),
                            S.divider(),
                            S.listItem()
                                .title('Startsidan')
                                .child(
                                    S.document()
                                        .title('Startsidan')
                                        .schemaType('startPage')
                                        .documentId('startPage')
                                ),
                        ])
                ),

            // We also need to remove the new singletons from the main list
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['casePage', 'casePost', 'startPage', 'hero', 'cta', 'imageCard', 'mediaTypes', 'titleWithCTA'].includes(listItem.getId())
            ),
        ]);
