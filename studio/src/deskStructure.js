import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Innehåll')
    .items([
      S.listItem()
        .title('Sidor')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Sidor')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Case sidan')
                .child(
                  S.list()
                    .title('Case')
                    .items([
                      S.listItem()
                        .title('Case')
                        .child(
                          S.document().schemaType('casePage').documentId('1')
                        ),
                      // S.document()
                      //     .schemaType('')
                      //     .documentId('2')
                    ])
                ),
              S.listItem()
                .title('Startsidan')
                .child(
                  S.document()
                    .title('Startsidan')
                    .schemaType('startPage')
                    .documentId('2')
                ),
            ])
        ),

      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['casePage', 'startPage', 'hero', 'cta'].includes(listItem.getId())
      ),
    ]);
