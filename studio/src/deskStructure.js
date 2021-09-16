import S from '@sanity/desk-tool/structure-builder';
import { FaRegFileAlt, FaRegFolderOpen, FaRegFileImage, FaRegClone } from 'react-icons/fa'

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
                                .title('Case')
                                .icon(FaRegFileImage)
                                .child(
                                    S.list()
                                        .title('Case')
                                        .items([
                                            S.listItem()
                                                .title('Case landningssida')
                                                .icon(FaRegFileAlt)
                                                .child(
                                                    S.document().schemaType('casePage').documentId('casePage')
                                                ),
                                            S.divider(),
                                            S.listItem()
                                                .title('Case')
                                                .icon(FaRegFolderOpen)
                                                .child(
                                                    S.documentTypeList('casePost').title('Alla case')
                                                )
                                        ])
                                ),
                            S.divider(),
                            S.listItem()
                                .title('Startsidan')
                                .icon(FaRegFileImage)
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
                    !['casePage', 'casePost', 'startPage', 'hero', 'cta', 'imageCard', 'mediaTypes', 'titleWithCTA', 'blockText'].includes(listItem.getId())
            ),
        ]);
