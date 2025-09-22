// 基础功能：首字母大写
import {capitalize as _capitalize} from 'lodash-es'

export function capitalize(str: string): string {
    // 调用 lodash 的 capitalize
    return _capitalize(str)
}