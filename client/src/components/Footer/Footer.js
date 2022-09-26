import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Box, Typography } from '../Core'
import Logo from '../Logo'
import clsx from 'clsx'

const FooterList = ({ children, className }) => {
  return (
    <ul className={clsx('tw-m-0 tw-list-none tw-p-0', className)}>
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
                        className={clsx(
                          'tw-mb-6 tw-text-base',
                          isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                        )}
                      >
                        {content.follow}
                      </Typography.H3>
                      <FooterList>
                        <li className="tw-font-light tw-leading-9">
                          <Typography.Anchor
                            href={content.linkedinLink}
                            target="_blank"
                            ariaLabel="Linkedin"
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                            )}
                          >
                            <i
                              className="icon icon-logo-linkedin tw-mr-1"
                              aria-hidden="true"
                            ></i>
                            {content.linkedin}
                          </Typography.Anchor>
                        </li>
                        <li className="tw-font-light tw-leading-9">
                          <Typography.Anchor
                            href={content.twitterLink}
                            target="_blank"
                            aria-label="Twitter"
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                            )}
                          >
                            <i
                              className="icon icon-logo-twitter tw-mr-1"
                              aria-hidden="true"
                            ></i>
                            {content.twitter}
                          </Typography.Anchor>
                        </li>
                        <li className="tw-font-light tw-leading-9">
                          <Typography.Anchor
                            href={content.facebookLink}
                            target="_blank"
                            aria-label="Facebook"
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                            )}
                          >
                            <i
                              className="icon icon-logo-facebook tw-mr-1"
                              aria-hidden="true"
                            ></i>

                            {content.facebook}
                          </Typography.Anchor>
                        </li>
                        <li className="tw-font-light tw-leading-9">
                          <Typography.Anchor
                            href={content.instagramLink}
                            target="_blank"
                            aria-label="Instagram"
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                            )}
                          >
                            <i
                              className="icon icon-logo-instagram tw-mr-1"
                              aria-hidden="true"
                            ></i>

                            {content.instagram}
                          </Typography.Anchor>
                        </li>
                      </FooterList>
                    </div>
                  </Col>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <Typography.H3
                        className={clsx(
                          'tw-mb-6 tw-text-base',
                          isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                        )}
                      >
                        {content.visitUs}
                        <br />
                      </Typography.H3>
                      <FooterList>
                        {content.addresses.map((address) => (
                          <li
                            className={clsx(
                              'tw-mb-5 tw-font-light tw-leading-9'
                            )}
                          >
                            <Typography.Anchor
                              href={address.addressLink}
                              className={clsx(
                                isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                              )}
                              target="_blank"
                            >
                              {address.name}
                              <br />
                              {address.streetAddress}
                              <br />
                              {address.zipCode} {address.city}
                            </Typography.Anchor>
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
                        className={clsx(
                          'tw-mb-6 tw-text-base',
                          isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                        )}
                      >
                        {content.contact}
                      </Typography.H3>
                      <FooterList>
                        <li className="tw-font-light tw-leading-9">
                          <Typography.Anchor
                            href={content.contactLink}
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                            )}
                          >
                            {content.contactTitle}
                          </Typography.Anchor>
                        </li>
                        <li className="tw-font-light tw-leading-9">
                          <Typography.Anchor
                            href={content.applyForJobLink}
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                            )}
                          >
                            {content.applyForJob}
                          </Typography.Anchor>
                        </li>
                        <li className="tw-font-light tw-leading-9">
                          <Typography.Anchor
                            href={`mailto:${content.mailToApplyJob}`}
                            className={clsx(
                              isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                            )}
                          >
                            {content.applyJob}
                          </Typography.Anchor>
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
                <p
                  className={clsx(
                    'tw-text-xs tw-leading-9 tw-tracking-normal',
                    isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                  )}
                >
                  <Typography.Anchor
                    className={clsx(
                      isDark ? 'tw-text-white' : 'tw-text-gray-dark'
                    )}
                    href="/privacy"
                  >
                    Our privacy policy.
                  </Typography.Anchor>{' '}
                </p>
              </Col>
              <Col sm="6" className="text-sm-right text-center">
                <FooterList className="tw-mt-2 tw-flex tw-justify-center tw-gap-3 sm:tw-justify-end">
                  <li>
                    <Typography.Anchor
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
                    </Typography.Anchor>
                  </li>
                  <li>
                    <Typography.Anchor
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
                    </Typography.Anchor>
                  </li>
                  <li>
                    <Typography.Anchor
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
                    </Typography.Anchor>
                  </li>
                  <li>
                    <Typography.Anchor
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
                    </Typography.Anchor>
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
