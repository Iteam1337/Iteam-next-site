import { AiOutlineLink } from 'react-icons/ai'
export default {
  type: 'document',
  name: 'blockText',
  title: 'Text',
  options: {
    collapsible: false,
  },
  fields: [
    {
      title: 'Text',
      name: 'blockText',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    description:
                      'Länk till extern sajt, t.ex https://www.sverigesallmannytta.se/nyheter/, eller e-postadress t.ex mailto:test@test.se',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto'],
                      }),
                  },
                  {
                    title: 'Öppna i ny flik',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Intern länk',
                blockEditor: {
                  icon: AiOutlineLink,
                },
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    weak: true,
                    title: 'Referens',
                    description:
                      'Länk till någon av de andra posterna på sidan, t.ex ett projekt eller en nyhet.',
                    to: [
                      { type: 'newsPost' },
                      { type: 'casePost' },
                      { type: 'mvpPage' },
                      { type: 'xPage' },
                      { type: 'scaleUpPage' },
                      { type: 'aboutPage' },
                    ],
                  },
                ],
              },
            ],
          },
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Subtitle', value: 'subtitle' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
        { type: 'imageWithAlt' },
      ],
    },
  ],
}
