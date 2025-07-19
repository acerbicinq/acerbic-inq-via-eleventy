const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});


return {
    dir: {
        input: "src",
        output: "public"
    }
};
}



import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Blog Title",
			subtitle: "This is a longer description about your blog.",
			base: "https://example.com/",
			author: {
				name: "Your Name",
				email: "", // Optional
			}
		}
	});
};

