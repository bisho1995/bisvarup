const withSass = require("@zeit/next-sass");

module.exports = (phase, { defaultConfig }) => {
  console.log({ phase, defaultConfig });
  return withSass({
    compress: true,
    poweredByHeader: false,
    distDir: "build",
    env: {
      customKey: "my-value",
    },
  });
};
