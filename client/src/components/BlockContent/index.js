import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'

const serializers = (withAnchor) => ({
    types: {
        block: ({ node, children }) => {
            switch (node.style) {
                case 'h1':
                    return (
                        <h1 withAnchor={withAnchor}>{children}</h1>
                    )
                case 'h2':
                    return (
                        <h2 withAnchor={withAnchor}>{children}</h2>
                    )
                case 'h3':
                    return (
                        <h3 withAnchor={withAnchor}>{children}</h3>
                    )
                case 'h4':
                    return (
                        <h4 withAnchor={withAnchor}>{children}</h4>
                    )
                case 'normal':
                    return <p>{children}</p>
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
