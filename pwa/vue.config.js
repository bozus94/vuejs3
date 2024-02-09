const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	pwa: {
		name: "Pwa test",
		themeColor: "#FF8811",
		startUrl: ".",
		display: "standalone",
		msTitleColor: "#272727",
	},
});
