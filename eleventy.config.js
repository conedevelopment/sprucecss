export default function (config) {
  config.addPassthroughCopy('./preview/src/css/**');
  config.addPassthroughCopy('./preview/src/font/**');
  config.addPassthroughCopy('./preview/src/js/**');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'preview/src',
      output: 'preview/dist'
    }
  };
};
