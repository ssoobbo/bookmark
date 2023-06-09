const babel = require('rollup-plugin-babel')
const { version } = require('./package.json')
const json = require('rollup-plugin-json')

const banner = `// ==UserScript==
// @name         碧蓝幻想书签
// @namespace    https://github.com/biuuu/gbf-bookmark
// @version      ${version}
// @description  none
// @author       biuuu
// @match        *://game.granbluefantasy.jp/*
// @match        *://gbf.game.mbga.jp/*
// @run-at       document-start
// @updateURL    https://biuuu.github.io/gbf-bookmark/gbf-bookmark.user.js
// @supportURL   https://github.com/biuuu/gbf-bookmark/issues
// ==/UserScript==`
module.exports = {
  input: 'src/main.js',
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
      presets: [['@babel/preset-env', {
        modules: false,
        targets: 'last 2 iOS versions'
      }]]
    })
  ],
  output: {
    file: './dist/gbf-bookmark.user.js',
    format: 'iife',
    name: 'gbf_bookmark_biuuu',
    banner: banner
  }
};
