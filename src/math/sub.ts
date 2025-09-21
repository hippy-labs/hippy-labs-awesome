import { formatMessage } from '../string/format'

// 减法运算，返回格式化后的结果
export function sub(a: number, b: number): string {
    const result = a - b
    return formatMessage('difference', result)
}