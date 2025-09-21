import {formatMessage} from '../string/format'

// 加法运算，返回格式化后的结果
export function add(a: number, b: number): string {
    const result = a + b
    return formatMessage('sum', result)
}