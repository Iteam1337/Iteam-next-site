import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Box, Anchor, Typography } from '../Core'
import Logo from '../Logo'
import clsx from 'clsx'

const PrivacyAnchor = styled(Anchor)`
  font-size: 13px;
  font-weight: 300;
`

const FooterList = ({ children, additionalClassName }) => {
  return (
    <ul className={clsx('tw-m-0 tw-list-none tw-p-0', additionalClassName)}>
      {children}
    </ul>
  )
}

const Footer = ({ isDark = true, content }) => {
  return (
    <footer>
      <Box bg={isDark ? 'dark' : 'light'}>
        <Container>
          <Box
            css={`
              padding: 80px 0 60px;
            `}
          >
            <Row className="justify-content-center">
              <Col lg="2" md="4">
                <Logo white={isDark} vertical />
              </Col>
              <Col lg="10" md="8" className="mt-5 mt-lg-0">
                <Row>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <Typography.H3
                        additionalClassName={clsx(
                          'tw-text-base tw-mb-6',
                          isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                        )}
                      >
                        {content.follow}
                      </Typography.H3>
                      <FooterList>
                        <li className="tw-leading-9">
                          <a
                            href={content.linkedinLink}
                            target="_blank"
                            aria-label="Linkedin"
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark',
                              'hover:tw-underline'
                            )}
                          >
                            <i
                              className="icon icon-logo-linkedin tw-mr-1"
                              aria-hidden="true"
                            ></i>
                            {content.linkedin}
                          </a>
                        </li>
                        <li className="tw-leading-9">
                          <a
                            href={content.twitterLink}
                            target="_blank"
                            aria-label="Twitter"
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark',
                              'hover:tw-underline'
                            )}
                          >
                            <i
                              className="icon icon-logo-twitter tw-mr-1"
                              aria-hidden="true"
                            ></i>
                            {content.twitter}
                          </a>
                        </li>
                        <li className="tw-leading-9">
                          <a
                            href={content.facebookLink}
                            target="_blank"
                            aria-label="Facebook"
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark',
                              'hover:tw-underline'
                            )}
                          >
                            <i
                              className="icon icon-logo-facebook tw-mr-1"
                              aria-hidden="true"
                            ></i>

                            {content.facebook}
                          </a>
                        </li>
                        <li className="tw-leading-9">
                          <a
                            href={content.instagramLink}
                            target="_blank"
                            aria-label="Instagram"
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark',
                              'hover:tw-underline'
                            )}
                          >
                            <i
                              className="icon icon-logo-instagram tw-mr-1"
                              aria-hidden="true"
                            ></i>

                            {content.instagram}
                          </a>
                        </li>
                      </FooterList>
                    </div>
                  </Col>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <Typography.H3
                        additionalClassName={clsx(
                          'tw-text-base tw-mb-6',
                          isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                        )}
                      >
                        {content.visitUs}
                        <br />
                      </Typography.H3>
                      <FooterList>
                        {content.addresses.map((address) => (
                          <li className="tw-mb-5 tw-leading-9">
                            <a
                              href={address.addressLink}
                              className={clsx(
                                isDark ? 'tw-text-white' : 'tw-text-gray-dark',
                                'hover:tw-underline'
                              )}
                              target="_blank"
                            >
                              {address.name}
                              <br />
                              {address.streetAddress}
                              <br />
                              {address.zipCode} {address.city}
                            </a>
                          </li>
                        ))}
                        <li
                          className={clsx(
                            'tw-mb-5 tw-font-light',
                            isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                          )}
                        >
                          {content.orgNumber}
                        </li>
                      </FooterList>
                    </div>
                  </Col>
                  <Col xs="6" lg="3">
                    <div className="mb-lg-4">
                      <Typography.H3
                        additionalClassName={clsx(
                          'tw-text-base tw-mb-6',
                          isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                        )}
                      >
                        {content.contact}
                      </Typography.H3>
                      <FooterList>
                        <li className="tw-leading-9">
                          <a
                            href={content.contactLink}
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark',
                              'hover:tw-underline'
                            )}
                          >
                            {content.contactTitle}
                          </a>
                        </li>
                        <li className=" tw-leading-9">
                          <a
                            href={content.applyForJobLink}
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark',
                              'hover:tw-underline'
                            )}
                          >
                            {content.applyForJob}
                          </a>
                        </li>
                        <li className="tw-leading-9">
                          <a
                            href={`mailto:${content.mailToApplyJob}`}
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark',
                              'hover:tw-underline'
                            )}
                          >
                            {content.applyJob}
                          </a>
                        </li>
                      </FooterList>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Box>
          <div
            className={clsx(
              'tw-border-1 tw-border-t tw-py-6',
              isDark ? 'tw-border-[#2f2f31]' : 'tw-border-gray-border'
            )}
          >
            <Row className="align-items-center">
              <Col
                sm="6"
                display="flex"
                className="text-sm-left text-center mb-2 mb-sm-0"
              >
                <p
                  className={clsx(
                    'tw-text-xs tw-leading-9 tw-tracking-normal',
                    isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                  )}
                >
                  &copy; 2021 Iteam, All Rights Reserved.
                </p>
                <PrivacyAnchor
                  className={clsx(
                    'tw-text-xs tw-tracking-normal',
                    isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                  )}
                  href="/privacy"
                >
                  Our privacy policy.
                </PrivacyAnchor>
              </Col>
              <Col sm="6" className="text-sm-right text-center">
                <FooterList additionalClassName="tw-mt-2 tw-flex sm:tw-justify-end tw-gap-3 tw-justify-center">
                  <li>
                    <a
                      href={content.linkedinLink}
                      target="_blank"
                      aria-label="Linkedin"
                      className={clsx(
                        isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                      )}
                    >
                      <i
                        className="icon icon-logo-linkedin"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={content.twitterLink}
                      target="_blank"
                      aria-label="Twitter"
                      className={clsx(
                        isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                      )}
                    >
                      <i
                        className="icon icon-logo-twitter"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={content.facebookLink}
                      target="_blank"
                      aria-label="Facebook"
                      className={clsx(
                        isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                      )}
                    >
                      <i
                        className="icon icon-logo-facebook"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={content.instagramLink}
                      target="_blank"
                      aria-label="Instagram"
                      className={clsx(
                        isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                      )}
                    >
                      <i
                        className="icon icon-logo-instagram"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </FooterList>
              </Col>
            </Row>
          </div>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
