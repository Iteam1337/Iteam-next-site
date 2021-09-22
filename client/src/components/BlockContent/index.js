import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import Title from '../Core/Title'
import Typography from '../Typography'

const serializers = (withAnchor) => ({
    types: {
        block: ({ node, children }) => {
            switch (node.style) {
                case 'h1':
                    return (
                        <Typography.H1>{children}</Typography.H1>
                    )
                case 'h2':
                    return (
                        <Typography.H2>{children}</Typography.H2>
                    )
                case 'h3':
                    return (
                        <h3>{children}</h3>
                    )
                case 'h4':
                    return (
                        <Title.CardTitle>{children}</Title.CardTitle>
                    )
                case 'normal':
                    return <Typography.Paragraph>{children}</Typography.Paragraph>
                default:
                    console.warn('Unhandled in portable text serializer: ', node)
                    return <p></p>
            }
        },
    },
    list: ({ type, children }) => {
        switch (type) {
            case 'bullet':
                return <ul>{children}</ul>
            case 'number':
                return <ol>{children}</ol>
            default:
                console.warn('Unhandled in portable text serializer: ', type)
                return <ul></ul>
        }
    },
    listItem: ({ children }) => (
        <li>
            <p>{children}</p>
        </li>
    ),
})

const BlockContent = ({ blocks = [], withAnchor = false }) => (
    <BaseBlockContent blocks={blocks} serializers={serializers(withAnchor)} />
)

export default BlockContent
