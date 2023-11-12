import { stringifyRequest } from 'loader-utils'

import { getImportStr } from '../utils/get-import-str.js'


const runtimeFilePath = import.meta.resolve('../../public/runtime.js')

export function getRuntimeImport(loaderContext, esModule) {
    const runtimePath = stringifyRequest(loaderContext, `${runtimeFilePath}`)

    return `${getImportStr(runtimePath, esModule)('runtime')}`
}
