// import postcssNested from 'postcss-nested'
// import autoprefixer from 'autoprefixer'
// import postcssPresetEnv from 'postcss-preset-env'

// export default {
//   plugins: [autoprefixer, postcssNested, postcssPresetEnv({ stage: 1 })],
// }

// import postcssNesting from 'postcss-nesting'

// module.export = {
//   parser: 'sugarss',
//   map: false,
//   plugins: {
//     'postcss-plugin': {
//       postcssNesting,
//     },
//   },
// }

// import { defineConfig } from 'vite'
// import postcssNesting from 'postcss-nesting'

// export default defineConfig({
//   css: {
//     postcss: {
//       plugins: [postcssNested, autoprefixer, postcssPresetEnv],
//     },
//   },
// })

// const postcssNested = require('postcss-nested')
// const postcssPresetEnv = require('postcss-preset-env')

// module.exports = {
//   plugins: [postcssNested({}), postcssPresetEnv({ stage: 1 })],
// }

// module.exports = ctx => ({
//   parser: ctx.parser ? 'sugarss' : false,
//   map: ctx.env === 'development' ? ctx.map : false,
//   plugins: {
//     'postcss-import': {},
//     'postcss-nested': {},
//     cssnano: ctx.env === 'production' ? {} : false,
//   },
// })

// module.exports = {
//   plugins: {
//     'postcss-nesting': {},
//     autoprefixer: {},
//     postcssPresetEnv: { stage: 1 },
//   },
// }

// module.exports = {
//   plugins: [require('postcss-preset-env')({ stage: 1 })],
// }

export default {
  plugins: {
    'postcss-preset-env': {
      stage: 1,
    },
    autoprefixer: {},
    'postcss-nesting': {},
  },
}
