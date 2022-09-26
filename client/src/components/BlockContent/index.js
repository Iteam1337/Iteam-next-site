import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'
import Img from 'next/image'

import { buildInternalUrl } from '../../utils/helpers'
import clsx from 'clsx'

const serializers = (additionalClassName) => ({
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case 'h2':
          return (
            <h2 className="tw-mb-0 tw-mt-4 tw-text-xl md:tw-mt-5 md:tw-text-2xl">
              {children}
            </h2>
          )
        case 'h3':
          return (
            <h3 className="tw-mb-0 tw-mt-4 tw-text-lg md:tw-mt-5 md:tw-text-xl">
              {children}
            </h3>
          )
        case 'h4':
          return (
            <h4 className="tw-mb-0 tw-mt-4 tw-text-base md:tw-mt-5 md:tw-text-lg">
              {children}
            </h4>
          )
        case 'normal':
          return (
            <p className={clsx(additionalClassName, 'tw-my-3 md:tw-my-4')}>
              {children}
            </p>
          )
        case 'blockquote':
          return (
            <blockquote className="tw-my-6 tw-flex tw-flex-row tw-bg-white tw-italic md:tw-my-8">
              <div
                aria-hidden="true"
                className="tw-mr-3 tw-font-serif tw-text-4xl tw-text-[#999]"
              >
                &ldquo;
              </div>
              <p>{children}</p>
            </blockquote>
          )
        case 'subtitle':
          return <p className={clsx(additionalClassName)}>{children}</p>
        default:
          console.warn('Unhandled in portable text serializer: ', node)
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
          quality={100}
          className="tw-my-3"
        />
      )
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      return (
        <a
          className="tw-text-inherit tw-underline hover:tw-no-underline"
          href={buildInternalUrl(mark.reference)}
        >
          {children}
        </a>
      )
    },
    link: ({ mark, children }) => {
      const { blank, href } = mark
      return blank ? (
        <a
          className="tw-underline hover:tw-no-underline"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <a className="tw-underline hover:tw-no-underline" href={href}>
          {children}
        </a>
      )
    },
  },
  list: ({ type, children }) => {
    switch (type) {
      case 'bullet':
        return <ul className="tw-list-disc tw-pl-8">{children}</ul>
      case 'number':
        return (
          <ol className="tw-list-decimal tw-pl-8 tw-font-light">{children}</ol>
        )
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

const BlockContent = ({ blocks = [], additionalClassName }) => {
  return (
    <BaseBlockContent
      blocks={blocks}
      serializers={serializers(additionalClassName)}
    />
  )
}

export default BlockContent
