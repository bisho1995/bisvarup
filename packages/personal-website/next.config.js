const withSass = require("@zeit/next-sass");

module.exports = (phase, { defaultConfig }) => {
  return withSass({
    compress: true,
    poweredByHeader: false,
    env: {
      customKey: "my-value",
    },
  });
};
