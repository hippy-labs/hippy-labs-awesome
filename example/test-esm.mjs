import {add, sub, capitalize, formatMessage} from '../dist/hippy-labs-awesome.esm.js'

console.log('ESM add:', add(2, 3))
console.log('ESM sub:', sub(20, 3))
console.log('ESM capitalize:', capitalize('hello world!'))
console.log('ESM formatMessage:', formatMessage('test', 'esm'))