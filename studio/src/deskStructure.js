import S from '@sanity/desk-tool/structure-builder'
import Iframe from 'sanity-plugin-iframe-pane'
import {
  FaRegFileAlt,
  FaRegFolderOpen,
  FaRegFileImage,
  FaRegClone,
  FaRegFolder,
} from 'react-icons/fa'
import title from '../schemas/shared/title'
import resolveProductionUrl from '../resolveProductionUrl'

import SocialPreview from 'part:social-preview/component'

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (['openPositions', 'casePost', 'newsPost'].includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc) => resolveProductionUrl(doc),
        })
        .title('Förhandsvisning'),
      S.view
        .component(
          SocialPreview({
            prepareFunction: (
              doc /* this object is the currently active document */
            ) => {
              return {
                title: doc.metaTags.title,
                description: doc.metaTags.description,
                ogImage: doc.metaTags.imageWithAlt.asset,
                siteUrl: 'https://iteam.se/',
              }
            },
          })
        )
        .title('Förhandsvisning för delning på sociala medier'),
    ])
  }

  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title('Förhandsvisning'),
  ])
}

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
              // S.listItem()
              //   .title('Startsidan')
              //   .icon(FaRegFileImage)
              //   .child(
              //     S.document()
              //       .title('Startsidan')
              //       .schemaType('startPage')
              //       .documentId('startPage')
              //   ),
              // S.divider(),
              // S.divider(),
              // S.listItem()
              //   .title('Erbjudanden')
              //   .icon(FaRegFolder)
              //   .child(
              //     S.list()
              //       .title('Erbjudanden')
              //       .items([
              //         S.listItem()
              //           .title('Iteam MVP')
              //           .icon(FaRegFileAlt)
              //           .child(
              //             S.document()
              //               .schemaType('mvpPage')
              //               .documentId('mvpPage')
              //               .title('Iteam MVP')
              //           ),
              //         S.divider(),
              //         S.listItem()
              //           .title('Iteam Scale-up')
              //           .icon(FaRegFileAlt)
              //           .child(
              //             S.document()
              //               .schemaType('scaleUpPage')
              //               .documentId('scaleUpPage')
              //               .title('Iteam Scale-up')
              //           ),
              //         S.divider(),
              //         S.listItem()
              //           .title('Iteam X')
              //           .icon(FaRegFileAlt)
              //           .child(
              //             S.document()
              //               .schemaType('xPage')
              //               .documentId('xPage')
              //               .title('Iteam X')
              //           ),
              //         S.divider(),
              //       ])
              // ),
              // S.divider(),
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
                            .views([
                              S.view.form(),
                              S.view
                                .component(Iframe)
                                .options({
                                  url: (doc) => resolveProductionUrl(doc),
                                })
                                .title('Förhandsvisning'),
                            ])
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
                            .views([
                              S.view.form(),
                              S.view
                                .component(Iframe)
                                .options({
                                  url: (doc) => resolveProductionUrl(doc),
                                })
                                .title('Förhandsvisning'),
                            ])
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
                            .views([
                              S.view.form(),
                              S.view
                                .component(Iframe)
                                .options({
                                  url: (doc) => resolveProductionUrl(doc),
                                })
                                .title('Förhandsvisning'),
                            ])
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
                            .views([
                              S.view.form(),
                              S.view
                                .component(Iframe)
                                .options({
                                  url: (doc) => resolveProductionUrl(doc),
                                })
                                .title('Förhandsvisning'),
                            ])
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
              S.divider(),
              S.listItem()
                .title('Book')
                .icon(FaRegFileAlt)
                .child(
                  S.document()
                    .title('Book')
                    .schemaType('bookPage')
                    .documentId('bookPage')
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .options({
                          url: (doc) => resolveProductionUrl(doc),
                        })
                        .title('Förhandsvisning'),
                    ])
                ),
            ])
        ),
      // S.listItem()
      //   .title('Moduler')
      //   .child(
      //     S.list()
      //       .title('Moduler')
      //       .items([
      //         S.listItem()
      //           .title('Footer')
      //           .icon(FaRegFileImage)
      //           .child(
      //             S.document()
      //               .title('Footer')
      //               .schemaType('footer')
      //               .documentId('footer')
      //           ),
      //         S.listItem()
      //           .title('Karusell')
      //           .icon(FaRegFileImage)
      //           .child(
      //             S.document()
      //               .title('Karusell')
      //               .schemaType('carousel')
      //               .documentId('carousel')
      //           ),
      //         S.listItem()
      //           .title('Våra priser')
      //           .icon(FaRegFileImage)
      //           .child(
      //             S.document()
      //               .title('Våra priser')
      //               .schemaType('ourPricing')
      //               .documentId('ourPricing')
      //           ),
      //       ])
      //   ),
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
            'mediaType',
            'titleWithCTA',
            'blockText',
            'textWithImage',
            'textGrid',
            'carousel',
            'newsPage',
            'newsPost',
            'section',
            'careerPage',
            'aboutPage',
            'footer',
            'coworker',
            'ourPricing',
            'openings',
            'sectionWithImageAndCta',
            'sectionWithCtaAndTextGrid',
            'textWithTags',
            'sectionWithImage',
            'mvpPage',
            'xPage',
            'openPositions',
            'scaleUpPage',
            'metaTags',
            'bookPage',
          ].includes(listItem.getId())
      ),
    ])
