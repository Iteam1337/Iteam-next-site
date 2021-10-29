import React from 'react'
import styled from 'styled-components'

const QuoteMark = styled.div`
  font-size: 2.5rem;
  font-family: Georgia, serif;
  color: #999;
  margin-right: 1rem;
  margin-top: -0.5rem;
`

const BlockQuote = styled.blockquote`
  box-sizing: border-box;
  min-width: 0;
  position: relative;
  background-color: white;
  font-style: italic;
  display: flex;
  flex-direction: row;
`

export default function Quote({ author = '', authorTitle = '', text }) {
  return (
    <BlockQuote>
      <QuoteMark aria-hidden="true">&ldquo;</QuoteMark>
      <div>
        <p className="mb-4">{text}</p>
        {author && (
          <cite className="">
            <div className="">
              <span className="">{author}</span>
              {authorTitle && (
                <>
                  <br />
                  <span>{authorTitle}</span>
                </>
              )}
            </div>
          </cite>
        )}
      </div>
    </BlockQuote>
  )
}
