import typescript from 'rollup-plugin-typescript2'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

function banner(format) {
    return `console.log("hippy-labs-awesome: format = ${format}")`
}

export default [
    // ESM
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/esm',
            format: 'esm',
            // banner: banner('ESM'),
            sourcemap: false,
        },
        plugins: [
            nodeResolve(),
            typescript({tsconfigOverride: {compilerOptions: {declaration: false}}}),
            // 本地服务
            // serve({open: true, contentBase: '.', port: 3000}),
            // livereload({watch: 'dist'}),
            //http://localhost:3000/example/test-dynamic-import.html
        ],
    },
    // CJS
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/cjs',
            format: 'cjs',
            // banner: banner('CJS'),
            sourcemap: false,
        },
        plugins: [
            nodeResolve(),
            typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})
        ],
    },
    // // UMD
    // {
    //     input: 'src/index.ts',
    //     output: {
    //         file: 'dist/umd/index.js',
    //         format: 'umd',
    //         name: 'HippyLabsAwesomeUMD',
    //         // banner: banner('UMD'),
    //         sourcemap: false,
    //     },
    //     plugins: [
    //         nodeResolve(),
    //         typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})
    //     ],
    // },
    // // IIFE
    // {
    //     input: 'src/index.ts',
    //     output: {
    //         file: 'dist/iife/index.js',
    //         format: 'iife',
    //         name: 'HippyLabsAwesomeIIFE',
    //         banner: banner('IIFE'),
    //         sourcemap: false,
    //     },
    //     plugins: [
    //         nodeResolve(),
    //         typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})
    //     ],
    // },
    // DTS（单独一份）（只一份 index.d.ts）
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/types',
            format: 'es',
        },
        plugins: [dts()],
    },
]