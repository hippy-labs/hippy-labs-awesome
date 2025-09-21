const { add, sub, capitalize, formatMessage } = require('../dist/hippy-labs-awesome.cjs.js')

console.log('CJS add:', add(2, 3))
console.log('CJS sub:', sub(20, 3))
console.log('CJS capitalize:', capitalize('hello world!'))
console.log('CJS formatMessage:', formatMessage('test', 'esm'))