// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import startPage from './pages/startPage';
import cta from './shared/cta';
import hero from './shared/hero';
import mediaTypes from './shared/mediaTypes';
import blockLayout from './shared/blockLayout';
import blockText from './shared/blockText';
import casePage from './pages/casePage'
import casePost from './pages/casePost'
import title from './shared/title'
import imageCard from './shared/imageCard';

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
    blockLayout,
    blockText,
    casePage,
    casePost,
    title,
    imageCard
  ]),
});
