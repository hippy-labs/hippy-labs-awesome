const path = require('path')

async function run() {
    // 动态加载 math 模块
    const math = require(path.resolve(__dirname, '../dist/cjs/math.js'))
    console.log('math.add(2, 3) =', math.add(2, 3))
    console.log('math.sub(5, 2) =', math.sub(5, 2))

    // 动态加载 string 模块
    const string = require(path.resolve(__dirname, '../dist/cjs/string.js'))
    console.log('string.capitalize("hello") =', string.capitalize('hello'))
}

run()