export * from './math/index'
export * from './string/index'


// // 动态导入 math 模块
// export async function loadMath() {
//     const math = await import('./math/index.js')
//     return math // 返回整个模块
// }
//
// // 动态导入 string 模块
// export async function loadString() {
//     const string = await import('./string/index.js')
//     return string // 返回整个模块
// }