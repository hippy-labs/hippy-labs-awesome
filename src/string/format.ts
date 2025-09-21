import {capitalize} from './capitalize'

/**
 * 格式化 label 与数值，例如：
 * format('score', 100) -> "Score: 100"
 */
export function formatMessage(label: string, value: number): string {
    return capitalize(`${label}: ${value}`)
}