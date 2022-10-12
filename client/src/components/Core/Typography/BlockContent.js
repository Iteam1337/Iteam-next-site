import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import client from '../../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import clsx from 'clsx'

import { buildInternalUrl } from '../../../utils/helpers'

const SerializedImage = ({ node }) => {
  const imageProps = useNextSanityImage(client, node.asset._ref)
  return (
    <Image
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
      alt={node.alt}
      quality={100}
      className="tw-my-3"
    />
  )
}

const serializers = (light) => ({
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case 'h2':
          return (
            <h2
              className={clsx(
                light && 'tw-text-white',
                'tw-mb-0 tw-mt-4 tw-text-xl md:tw-mt-5 md:tw-text-2xl'
              )}
            >
              {children}
            </h2>
          )
        case 'h3':
          return (
            <h3
              className={clsx(
                light && 'tw-text-white',
                'tw-mb-0 tw-mt-4 tw-text-lg md:tw-mt-5 md:tw-text-xl'
              )}
            >
              {children}
            </h3>
          )
        case 'h4':
          return (
            <h4
              className={clsx(
                light && 'tw-text-white',
                'tw-mb-0 tw-mt-4 tw-text-base md:tw-mt-5 md:tw-text-lg'
              )}
            >
              {children}
            </h4>
          )
        case 'normal':
          return (
            <p className={clsx(light && 'tw-text-white', 'tw-my-3 md:tw-my-4')}>
              {children}
            </p>
          )
        case 'blockquote':
          return (
            <blockquote
              className={clsx(
                light && 'tw-text-white',
                'tw-my-6 tw-flex tw-flex-row tw-bg-white tw-italic md:tw-my-8'
              )}
            >
              <span
                aria-hidden="true"
                className={clsx(
                  light ? 'tw-text-white' : 'tw-text-[#999]',
                  'tw-mr-3 tw-font-serif tw-text-4xl'
                )}
              >
                &ldquo;
              </span>
              <p>{children}</p>
            </blockquote>
          )
        case 'subtitle':
          return <p className={clsx(light && 'tw-text-white')}>{children}</p>
        default:
          console.warn('Unhandled in portable text serializer: ', node)
          return <p></p>
      }
    },
    imageWithAlt: ({ node }) => {
      return <SerializedImage node={node} />
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      return (
        <a
          className={clsx(
            light && 'tw-text-white',
            'tw-text-inherit tw-underline hover:tw-no-underline'
          )}
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
          className={clsx(
            light && 'tw-text-white',
            'tw-underline hover:tw-no-underline'
          )}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <a
          className={clsx(
            light && 'tw-text-white',
            'tw-underline hover:tw-no-underline'
          )}
          href={href}
        >
          {children}
        </a>
      )
    },
  },
  list: ({ type, children }) => {
    switch (type) {
      case 'bullet':
        return (
          <ul
            className={clsx(light && 'tw-text-white', 'tw-list-disc tw-pl-8')}
          >
            {children}
          </ul>
        )
      case 'number':
        return (
          <ol
            className={clsx(
              light && 'tw-text-white',
              'tw-list-decimal tw-pl-8 tw-font-light'
            )}
          >
            {children}
          </ol>
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

export const BlockContent = ({ blocks = [], light }) => {
  return <BaseBlockContent blocks={blocks} serializers={serializers(light)} />
}
