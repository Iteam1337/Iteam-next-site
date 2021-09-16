// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import startPage from './pages/startPage';
import cta from './shared/cta';
import hero from './shared/hero';
import mediaTypes from './shared/mediaTypes';
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
import carousel from './shared/carousel';
import carouselContent from './shared/carouselContent';

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
    mediaTypes,
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
    carouselContent,
  ]),
});
