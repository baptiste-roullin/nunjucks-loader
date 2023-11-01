import { stringifyRequest } from 'loader-utils'

import runtimeFilePath from '../../public/runtime.js'
import { getImportStr } from '../utils/get-import-str.js'
export function getRuntimeImport(loaderContext, esModule) {
  var runtimePath = stringifyRequest(loaderContext, ''.concat(runtimeFilePath))
  return ''.concat(getImportStr(runtimePath, esModule)('runtime'))
}