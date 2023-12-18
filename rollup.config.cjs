var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var { terser } = require('rollup-plugin-terser');

module.exports = { // Use module.exports instead of export default
	input: "src/index.js",
	output: {
		file: "dist/unitsnet.bundle.js",
		format: "iife",
	},
	plugins: [resolve(), commonjs(), terser()],
};
