// hippy-labs-plugin.js
export default function hippyLabsPlugin(options = {}) {
    return {
        //
        name: 'hippy-labs-plugin', // 插件名，必须有，方便调试

        // 生命周期钩子
        buildStart(options) { /* 构建开始 */
        },
        resolveId(source, importer, options) { /* 自定义模块解析 */
        },
        buildEnd(err) { /* 构建结束，可能有错误 */
        },
        writeBundle(outputOptions, bundle) { /* 写入磁盘后执行 */
        },
        watchChange(id, change) { /* 监听文件变化 */
        },
        closeWatcher() { /* watcher 关闭 */
        },
        closeBundle() { /* 构建进程关闭 */
        },

        //----------------------------------------------------------
        //在解析模块前执行，可以修改输入参数
        options(inputOptions) {
            console.log('构建配置:', inputOptions)
            return null // 或返回修改后的 inputOptions
        },

        // 在每个模块加载前执行，可以自定义模块内容
        load(id) {
            if (id.endsWith('.virtual')) {
                return 'export default "这是一个虚拟模块";'
            }
            return null // 返回 null 继续默认行为
        },

        // 转换模块代码（最常用的钩子）
        transform(code, id) {
            if (id.endsWith('.js')) {
                const replaced = code.replace(/__VERSION__/g, '1.0.0')
                return {
                    code: replaced,
                    map: null // 如果生成了新的源码映射，可返回 source map
                }
            }
            return null
        },

        // 在打包输出时修改最终生成文件
        generateBundle(options, bundle) {
            for (const [fileName, chunkOrAsset] of Object.entries(bundle)) {
                if (chunkOrAsset.type === 'asset') {
                    // 静态资源
                    console.log('生成静态资源:', fileName)
                } else {
                    // JS chunk
                    console.log('生成 JS:', fileName)
                }
            }
        }
    }
}