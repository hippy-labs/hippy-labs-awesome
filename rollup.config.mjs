import typescript from 'rollup-plugin-typescript2'

function banner(format) {
    return `console.log("hippy-labs-awesome: format = ${format}")`
}

export default [
    // ESM
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/hippy-labs-awesome.esm.js',
            format: 'esm',
            banner: banner('ESM'),
            sourcemap: true,
        },
        plugins: [typescript()]
    },
    // CJS
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/hippy-labs-awesome.cjs.js',
            format: 'cjs',
            banner: banner('CJS'),
            sourcemap: true,
        },
        plugins: [typescript()]
    },
    // UMD
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/hippy-labs-awesome.umd.js',
            format: 'umd',
            name: 'HippyLabsAwesomeUMD',
            // banner: banner('UMD'),
            sourcemap: true,
        },
        plugins: [typescript()]
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
        plugins: [typescript()]
    }
]