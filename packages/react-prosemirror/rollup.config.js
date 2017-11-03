const babel = require('rollup-plugin-babel')
const postcss = require('rollup-plugin-postcss')
const postcssModules = require('postcss-modules')

const cssExportMap = {}

module.exports = {
  input: './src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/index.js'
  },
  sourcemap: true,
  plugins: [
    postcss({
      extensions: ['.css'],
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens
          }
        })
      ],
      getExportNamed: false,
      getExport: id => cssExportMap[id]
    }),
    babel({
      runtimeHelpers: true,
      externalHelpers: false,
      plugins: [
        'external-helpers',
        'transform-runtime'
      ]
    })
  ],
  external: id => !/^[./]/.test(id)
}
