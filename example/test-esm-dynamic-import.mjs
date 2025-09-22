// test-dynamic-import.mjs
import {loadMath, loadString} from '../dist/esm/index.js'

async function run() {
    // 动态加载 math 模块
    const math = await loadMath()
    console.log('math.add(2, 3) =', math.add(2, 3))
    console.log('math.sub(5, 2) =', math.sub(5, 2))

    // 动态加载 string 模块
    const string = await loadString()
    console.log('string.capitalize("hello") =', string.capitalize('hello'))
}

run().catch(err => {
    console.error('运行出错:', err)
})