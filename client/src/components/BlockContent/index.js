import React from "react"
import BaseBlockContent from "@sanity/block-content-to-react"
import Title from "../Core/Title"
import Typography from "../Typography"
import client from "../../sanity-client"
import { useNextSanityImage } from "next-sanity-image"
import Img from "next/image"



const serializers = (withAnchor) => ({
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case "h1":
          return <Typography.H1>{children}</Typography.H1>
        case "h2":
          return <Typography.H2>{children}</Typography.H2>
        case "h3":
          return <Typography.H3>{children}</Typography.H3>
        case "h4":
          return <Typography.H4>{children}</Typography.H4>
        case "normal":
          return <Typography.Paragraph>{children}</Typography.Paragraph>
        case "blockquote":
          return (
            <Typography.BlockQuote>
              <Typography.QuoteMark aria-hidden="true">&ldquo;</Typography.QuoteMark>
              <Typography.QuoteParagraph>{children}</Typography.QuoteParagraph>
            </Typography.BlockQuote>
          )
        default:
          console.warn("Unhandled in portable text serializer: ", node)
          return <p></p>
      }
    },
    imageWithAlt: ({ node }) => {
      const imageProps = useNextSanityImage(client, node.asset._ref)
      return (
        <Img
          {...imageProps}
          layout="responsive"
          sizes="(max-width: 800px) 100vw, 800px"
          alt={node.alt}
        />
      )
    },
  },
  marks: {
    link: ({ mark, children }) => (
      <Typography.Anchor href={mark.href} target="_blank" rel="noreferrer">
        {children}
      </Typography.Anchor>
    ),
  },
  list: ({ type, children }) => {
    switch (type) {
      case "bullet":
        return (
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
            {children}
          </ul>
        )
      case "number":
        return <ol style={{ paddingLeft: "2rem" }}>{children}</ol>
      default:
        console.warn("Unhandled in portable text serializer: ", type)
        return <ul></ul>
    }
  },
  listItem: ({ children }) => (
    <li>
      <Typography.Paragraph>{children}</Typography.Paragraph>
    </li>
  )
})

const BlockContent = ({ blocks = [], withAnchor = false }) => {
  console.log("blocks", blocks)
  return (
    <BaseBlockContent blocks={blocks} serializers={serializers(withAnchor)} />
  )
}

export default BlockContent
