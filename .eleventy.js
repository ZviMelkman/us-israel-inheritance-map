module.exports = function (eleventyConfig) {
  // Copy assets straight through to the built site.
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // Article clusters, newest first by an explicit "order" field then title.
  eleventyConfig.addCollection("reactive", (api) =>
    api.getFilteredByTag("reactive").sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );
  eleventyConfig.addCollection("proactive", (api) =>
    api.getFilteredByTag("proactive").sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  // Simple readable date for "checked on" lines etc.
  eleventyConfig.addFilter("isoDate", (d) => {
    if (!d) return "";
    const dt = new Date(d);
    return dt.toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
