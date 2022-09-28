const redirects = require('./redirects.json')

module.exports = {
  async redirects() {
    console.log(redirects)
    return redirects
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
