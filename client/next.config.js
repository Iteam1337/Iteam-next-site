const redirects = require('./redirects.json')
module.exports = {
  async redirects() {
    return redirects
  },
  async headers() {
    return [
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
  swcMinify: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}
