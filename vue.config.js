
const path = require('path')

module.exports = {
	css: {
		loaderOptions: {
			stylus: {
				import: [
					path.resolve(__dirname, './src/assets/stylus/mixins.styl'),
					path.resolve(__dirname, './src/assets/stylus/variables.styl'),
				],
				'resolve url': true,
			}
		}
	}
}
