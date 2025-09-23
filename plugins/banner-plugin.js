import {readFileSync} from 'node:fs'
import {join} from 'node:path'

export default function bannerPlugin(options = {}) {
    const {
        pkgPath = join(process.cwd(), 'package.json'),
        bannerTemplate = (pkg) =>
            `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author || ''}
 * Released under the ${pkg.license} License
 * Build: ${new Date().toISOString()}
 */
`
    } = options

    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
    const banner = bannerTemplate(pkg)

    return {
        //插件对象里必须有 name 属性，方便调试。
        name: 'banner-plugin',

        //Rollup 在输出产物前调用它。
        //bundle 是一个对象，包含所有待输出的文件。
        generateBundle(_, bundle) {
            for (const file of Object.values(bundle)) {
                //如果 file.type === 'chunk'（即 JS 代码块，不是图片/css 等资源），就在最前面加上 banner。
                if (file.type === 'chunk') {
                    //file.code 就是最终写入磁盘的 JS 内容。
                    file.code = banner + file.code
                }
            }
        }
    }
}