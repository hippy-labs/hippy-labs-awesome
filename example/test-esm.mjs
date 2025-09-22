/**
 * package.json 添加配置
 * "type": "module",
 */
import {add, sub, capitalize, formatMessage} from '../dist/esm/hippy-labs-awesome.esm.js'

//
// import { add, sub } from '../dist/esm/math.js'
// import { capitalize, formatMessage } from '../dist/esm/string.js'

console.log('ESM add:', add(2, 3))
console.log('ESM sub:', sub(20, 3))
console.log('ESM capitalize:', capitalize('hello world!'))
console.log('ESM formatMessage:', formatMessage('test', 'esm'))


