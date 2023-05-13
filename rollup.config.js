import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import sucrase from '@rollup/plugin-sucrase'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import path from 'path'
const __dirname = path.dirname(__filename)
const pathResolve = p => path.resolve(__dirname, p)

export default {
  input: './lib/index.js', // 入口文件
  output: {
    file: './dist/bundle.js', // 打包后的存放文件
    format: 'es', // amd / es / cjs / iife / umd
    named: 'formake', // 如果iife,umd需要指定一个全局变量
  },
  plugins: [
    alias({
      entries: {
        '@': pathResolve('src'),
        _: __dirname,
      },
    }),
    // 将 TypeScript 和 JSX 编译成 JavaScript
    // sucrase({ // 使用该插件需要将nodeResolve 加上extensions， rollup默认不识别jsx, tsx文件
    //   exclude: ['node_modules/**'],
    //   transforms: ['typescript', 'jsx']
    // }),
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    json(),
    babel({
      extensions: ['.js', '.jsx'],
      plugins: [
      ],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
    }),
    postcss({
      plugins: []
    })
  ],
  external: ['antd', 'react'], // 这里不能打包react, 项目中存在两个不同的react版本，react hooks会报错
}
