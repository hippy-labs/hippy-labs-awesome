/**
 * package.json 去掉配置
 * "type": "module",
 */
const {add, sub, capitalize, formatMessage} = require('../dist/cjs/hippy-labs-awesome.cjs.js')

// const { add, sub } = require('../dist/cjs/math.js')
// const { capitalize, formatMessage } = require('../dist/cjs/string.js')

console.log('CJS add:', add(2, 3))
console.log('CJS sub:', sub(20, 3))
console.log('CJS capitalize:', capitalize('hello world!'))
console.log('CJS formatMessage:', formatMessage('test', 'esm'))