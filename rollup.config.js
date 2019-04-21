import { join } from 'path';
import deepmerge from 'deepmerge';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify-es';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const pkgJsonFile = join(process.cwd(), 'package.json');

// eslint-disable-next-line no-console
console.log('Loading dynamic rollup config from', pkgJsonFile);

// eslint-disable-next-line global-require, import/no-dynamic-require
const pkgJson = require(pkgJsonFile);

const fileTypeMap = {
    umd: pkgJson.main.split('/').splice(-1),
    es: pkgJson.module.split('/').splice(-1),
    iife: pkgJson.unpkg.split('/').splice(-1),
};

export default deepmerge({
    input: 'src/index.js',
    output: {
        name: null, // To be specified in sub-package package.json
        file: `dist/${fileTypeMap[argv.format]}`,
        exports: 'named',
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        commonjs(),
        vue({
            css: true,
            compileTemplate: true,
            template: {
                isProduction: true,
            },
        }),
        buble(),
        // Only minify browser (iife) version
        ...(argv.format === 'iife' ? [uglify()] : []),
    ],
}, pkgJson.rollup);
