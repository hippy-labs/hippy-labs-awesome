import typescript from 'rollup-plugin-typescript2'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'

function banner(format) {
    return `console.log("hippy-labs-awesome: format = ${format}")`
}

export default [
    // ESM
    {
        input: {
            index: 'src/index.ts',
            math: 'src/math/index.ts',
            string: 'src/string/index.ts',
        },
        output: {
            dir: 'dist/esm',
            format: 'esm',
            banner: banner('ESM'),
            sourcemap: false,
            entryFileNames: '[name].js',
            chunkFileNames: 'chunks/[name]-[hash].js',
            manualChunks: {
                vendor: ['lodash-es'], // 提取 lodash-es 到单独的 vendor chunk
            },
        },
        plugins: [
            nodeResolve(),
            typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})
        ],
    },
    // CJS
    {
        input: {
            index: 'src/index.ts',
            math: 'src/math/index.ts',
            string: 'src/string/index.ts',
        },
        output: {
            dir: 'dist/cjs',
            format: 'cjs',
            banner: banner('CJS'),
            sourcemap: false,
            entryFileNames: '[name].js',
            chunkFileNames: 'chunks/[name]-[hash].js',
            manualChunks: {
                vendor: ['lodash-es'], // 提取 lodash-es 到单独的 vendor chunk
            },
        },
        plugins: [
            nodeResolve(),
            typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})
        ],
    },
    // UMD
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/umd/index.js',
            format: 'umd',
            name: 'HippyLabsAwesomeUMD',
            // banner: banner('UMD'),
            sourcemap: false,
        },
        plugins: [
            nodeResolve(),
            typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})
        ],
    },
    // IIFE
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/iife/index.js',
            format: 'iife',
            name: 'HippyLabsAwesomeIIFE',
            banner: banner('IIFE'),
            sourcemap: false,
        },
        plugins: [
            nodeResolve(),
            typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})
        ],
    },
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