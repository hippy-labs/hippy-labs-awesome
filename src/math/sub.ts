import {formatMessage} from '../string/format'
import {subtract as lodashSub} from 'lodash-es'

// 减法运算，返回格式化后的结果
export function sub(a: number, b: number): string {
    const result = lodashSub(a, b)
    return formatMessage('difference', result)
}