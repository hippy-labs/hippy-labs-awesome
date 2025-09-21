import typescript from 'rollup-plugin-typescript2'
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
            sourcemap: true,
        },
        plugins: [typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})]
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
            sourcemap: true,
        },
        plugins: [typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})]
    },
    // UMD
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/hippy-labs-awesome.umd.js',
            format: 'umd',
            name: 'HippyLabsAwesomeUMD',
            sourcemap: true,
        },
        plugins: [typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})]
    },
    // IIFE
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/hippy-labs-awesome.iife.js',
            format: 'iife',
            name: 'HippyLabsAwesomeIIFE',
            banner: banner('IIFE'),
            sourcemap: true,
        },
        plugins: [typescript({tsconfigOverride: {compilerOptions: {declaration: false}}})]
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