import S from '@sanity/desk-tool/structure-builder';
import {
  FaRegFileAlt,
  FaRegFolderOpen,
  FaRegFileImage,
  FaRegClone,
  FaRegFolder,
} from 'react-icons/fa';
import title from '../schemas/shared/title';

export default () =>
  S.list()
    .title('Innehåll')
    .items([

      S.listItem()
        .title('Sidor')
        .icon(FaRegClone)
        .child(
          S.list()
            .title('Sidor')
            .items([
              S.listItem()
                .title('Startsidan')
                .icon(FaRegFileImage)
                .child(
                  S.document()
                    .title('Startsidan')
                    .schemaType('startPage')
                    .documentId('startPage')
                ),
              S.divider(),
              S.listItem()
                .title('Erbjudanden')
                .icon(FaRegFolder)
                .child(
                  S.list()
                    .title('Erbjudanden')
                    .items([
                      S.listItem()
                        .title('Iteam MVP')
                        .icon(FaRegFileAlt)
                        .child(
                          S.document()
                            .schemaType('iteamMvp')
                            .documentId('iteamMvp')
                            .title('Iteam MVP')
                        ),
                      S.divider(),
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('Case')
                .icon(FaRegFolder)
                .child(
                  S.list()
                    .title('Case')
                    .items([
                      S.listItem()
                        .title('Case landningssida')
                        .icon(FaRegFileAlt)
                        .child(
                          S.document()
                            .schemaType('casePage')
                            .documentId('casePage')
                            .title('Case landningssida')
                        ),
                      S.divider(),
                      S.listItem()
                        .title('Case')
                        .icon(FaRegFolderOpen)
                        .child(
                          S.documentTypeList('casePost').title('Alla case')
                        ),
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('Aktuellt')
                .icon(FaRegFolder)
                .child(
                  S.list()
                    .title('Aktuellt')
                    .items([
                      S.listItem()
                        .title('Aktuellt landningssida')
                        .icon(FaRegFileAlt)
                        .child(
                          S.document()
                            .schemaType('newsPage')
                            .documentId('newsPage')
                            .title('Akuellt landningssida')
                        ),
                      S.divider(),
                      S.listItem()
                        .title('Nyheter')
                        .icon(FaRegFolderOpen)
                        .child(
                          S.documentTypeList('newsPost').title('Alla nyheter')
                        ),
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('Om oss')
                .icon(FaRegFolder)
                .child(
                  S.list()
                    .title('Om oss')
                    .items([
                      S.listItem()
                        .title('Om oss landningssida')
                        .icon(FaRegFileAlt)
                        .child(
                          S.document()
                            .schemaType('aboutPage')
                            .documentId('aboutPage')
                            .title('Om oss landningssida')
                        ),
                      S.divider(),
                      S.listItem()
                        .title('Medarbetare')
                        .icon(FaRegFolderOpen)
                        .child(
                          S.documentTypeList('coworker').title(
                            'Alla medarbetare'
                          )
                        ),
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('Karriär')
                .icon(FaRegFolder)
                .child(
                  S.list()
                    .title('Karriär')
                    .items([
                      S.listItem()
                        .title('Karriär landningssida')
                        .icon(FaRegFileAlt)
                        .child(
                          S.document()
                            .schemaType('careerPage')
                            .documentId('careerPage')
                            .title('Karrriär landningssida')
                        ),
                      S.divider(),
                      S.listItem()
                        .title('Öppna tjänster')
                        .icon(FaRegFolderOpen)
                        .child(
                          S.documentTypeList('openPositions').title(
                            'Öppna tjänster'
                          )
                        ),
                    ])
                ),
            ]),
        ),
      S.listItem()
        .title('Moduler')
        .child(
          S.list()
            .title('Moduler')
            .items([
              S.listItem()
                .title('Footer')
                .icon(FaRegFileImage)
                .child(
                  S.document()
                    .title('Footer')
                    .schemaType('footer')
                    .documentId('footer')

                )
            ])

        )
      ,
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'casePage',
            'casePost',
            'startPage',
            'hero',
            'cta',
            'imageCard',
            'mediaTypes',
            'titleWithCTA',
            'blockText',
            'textWithImage',
            'textGrid',
            'carousel',
            'carouselContent',
            'newsPage',
            'newsPost',
            'section',
            'careerPage',
            'aboutPage',
            'footer',
            'coworker'
          ].includes(listItem.getId())
      ),
    ]);
