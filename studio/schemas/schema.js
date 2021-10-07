// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import startPage from './pages/startPage';
import cta from './shared/cta';
import hero from './shared/hero';
import mediaType from './shared/mediaType';
import layout from './shared/layout';
import blockText from './shared/blockText';
import casePage from './pages/casePage';
import casePost from './pages/casePost';
import title from './shared/title';
import imageCard from './shared/imageCard';
import titleWithCTA from './shared/titleWithCTA';
import imageWithAlt from './shared/imageWithAlt';
import textWithImage from './shared/textWithImage';
import textGrid from './shared/textGrid';
import carousel from './modules/carousel';
import newsPage from './pages/newsPage';
import newsPost from './pages/newsPost';
import aboutPage from './pages/aboutPage';
import section from './shared/sections/section';
import careerPage from './pages/careerPage';
import openPositions from './pages/openPositions';
import openings from './shared/openings';
import layoutImages from './shared/layoutImages';
import coworker from './pages/coworker';
import footer from './modules/footer';
import mvpPage from './pages/mvpPage';
import sectionWithImageAndCta from './shared/sections/sectionWithImageAndCta';
import sectionWithCtaAndTextGrid from './shared/sections/sectionWithCtaAndTextGrid';
import textWithTags from './shared/textWithTags';
import sectionWithImage from './shared/sections/sectionWithImage';
import scaleUpPage from './pages/scaleUpPage';
import ourPricing from './modules/ourPricing';
import slug from './shared/slug';
import xPage from './pages/xPage';
import metaTags from './shared/metaTags';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    startPage,
    cta,
    hero,
    mediaType,
    layout,
    blockText,
    casePage,
    casePost,
    title,
    imageCard,
    titleWithCTA,
    imageWithAlt,
    textWithImage,
    textGrid,
    carousel,
    newsPage,
    newsPost,
    aboutPage,
    section,
    careerPage,
    openPositions,
    openings,
    layoutImages,
    coworker,
    footer,
    mvpPage,
    sectionWithImageAndCta,
    sectionWithCtaAndTextGrid,
    textWithTags,
    sectionWithImage,
    scaleUpPage,
    ourPricing,
    slug,
    xPage,
    metaTags,
  ]),
});
