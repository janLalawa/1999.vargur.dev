module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("gifs");

    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};
