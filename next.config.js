const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const redirects = require('./redirects.json')

module.exports = withFonts(
  withOptimizedImages({
    /* config for next-optimized-images */
    // your config for other plugins or the general next.js here...
    async redirects() {
      return redirects
    }
  })
);
