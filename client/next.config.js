const redirects = require('./redirects.json')

// Origins allowed to embed the site in an iframe. Sanity Studio uses
// sanity-plugin-iframe-pane for live preview, so it must be allowed here.
const frameAncestors = [
  "'self'",
  'https://iteam-next-site-cms.vercel.app',
  'https://iteam-next-site-cms-iteam.vercel.app',
  'https://iteam-next-site-cms-git-main-iteam.vercel.app',
  'http://localhost:3333',
].join(' ')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=()',
  },
  // frame-ancestors is the CSP replacement for X-Frame-Options and, unlike
  // X-Frame-Options, can allow-list the studio origins above.
  { key: 'Content-Security-Policy', value: `frame-ancestors ${frameAncestors}` },
]

module.exports = {
  async redirects() {
    return redirects
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/.well-known/matrix/server',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
        ],
      },
      {
        source: '/.well-known/matrix/client',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ]
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}
