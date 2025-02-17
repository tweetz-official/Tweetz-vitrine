// plugins
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// collections

// filters
const limit = require("./src/_11ty/filters/limit.js");
const dates = require("./src/_11ty/filters/dates.js");

module.exports = function (eleventyConfig) {
    // collections

    // filters
    eleventyConfig.addFilter("limit", limit);
    eleventyConfig.addFilter("dateISO", dates.dateISO);
    eleventyConfig.addFilter("dateFeed", dates.dateFeed);
    eleventyConfig.addFilter("dateFull", dates.dateFull);
    eleventyConfig.addFilter("dateFormat", dates.dateFormat);
    eleventyConfig.addFilter("dateYear", dates.dateYear);

    // plugins
    eleventyConfig.addPlugin(syntaxHighlight, {
        trim: true,
    });

    // // ignores
    // eleventyConfig.ignores.add("src/assets/**/*");
    // eleventyConfig.watchIgnores.add("src/assets/**/*");

    // passthrough copy
    eleventyConfig.setServerPassthroughCopyBehavior("copy");
    eleventyConfig.addPassthroughCopy({ "./src/static": "/" });
    eleventyConfig.addPassthroughCopy("./src/assets/img");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts");
    eleventyConfig.addPassthroughCopy("src/assets/js");

    // server config
    eleventyConfig.setServerOptions({
        watch: ["./dist/assets/css/**/*.css", "./dist/assets/js/**/*.js"],
        port: 8000,
    });

    // base config
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            data: "_data",
        },
        templateFormats: ["njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    };
};
