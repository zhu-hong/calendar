import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  externals: ['@zhu-hong/usedate'],
  // rollup: {
  //   emitCJS: true,
  // },
})