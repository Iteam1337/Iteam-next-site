import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import * as Serializers from './serializers'
import { Title } from '.'

const serializers = (withAnchor) => ({
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case 'h1':
          return (
            <Serializers.H1 withAnchor={withAnchor}>{children}</Serializers.H1>
          )
        case 'h2':
          return (
            <Typography.H2 withAnchor={withAnchor}>{children}</Typography.H2>
          )
        case 'h3':
          return (
            <Serializers.H3 withAnchor={withAnchor}>{children}</Serializers.H3>
          )
        case 'h4':
          return (
            <Serializers.H4 withAnchor={withAnchor}>{children}</Serializers.H4>
          )
        case 'normal':
          return <Serializers.Paragraph>{children}</Serializers.Paragraph>
        default:
          console.warn('Unhandled in portable text serializer: ', node)
          return <p></p>
      }
    },
    bodyImage: ({ node }) => {
      return <Serializers.Image node={node} />
    },

    youtube: ({ node }) => <Serializers.YouTube node={node} />,
    code: ({ node }) => <Serializers.Code node={node} />,
    repoLink: ({ node }) => <Serializers.RepoLink node={node} />,
  },
  marks: {
    link: ({ mark, children }) => (
      <Serializers.ExternalLink mark={mark}>
        {children}
      </Serializers.ExternalLink>
    ),
    internalLink: ({ mark, children }) => (
      <Serializers.InternalLink mark={mark}>
        {children}
      </Serializers.InternalLink>
    ),
  },
  list: ({ type, children }) => {
    switch (type) {
      case 'bullet':
        return <ul className="list-disc max-w-3xl pl-8">{children}</ul>
      case 'number':
        return <ol className="list-decimal max-w-3xl pl-8">{children}</ol>
      default:
        console.warn('Unhandled in portable text serializer: ', type)
        return <ul></ul>
    }
  },
  listItem: ({ children }) => (
    <li>
      <Serializers.Paragraph>{children}</Serializers.Paragraph>
    </li>
  ),
})

const BlockContent = ({ blocks = [], withAnchor = false }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers(withAnchor)} />
)

export default BlockContent
