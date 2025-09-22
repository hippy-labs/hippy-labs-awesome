import {formatMessage} from '../string/format'
import {add as lodashAdd} from 'lodash-es'

// 加法运算，返回格式化后的结果
export function add(a: number, b: number): string {
    const result = lodashAdd(a, b)
    return formatMessage('sum', result)
}