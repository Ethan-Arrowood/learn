import brython from './brython';
import favicons from './favicons';
import meta from './meta';
import styleSheets from './styleSheets';
// import mathjax from './mathjax';

const metaAndStyleSheets = meta
  .concat(brython, favicons, styleSheets)
  .map((element, i) => ({ ...element, key: `meta-stylesheet-${i}` }));

export default metaAndStyleSheets;
