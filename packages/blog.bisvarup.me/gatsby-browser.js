/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require('prismjs/themes/prism-tomorrow.css');
require('./src/styles/global.scss');
require('./src/styles/tailwind.global.css');

export const onServiceWorkerUpdateReady = () => {
  window.location.reload();
};

export default undefined;
