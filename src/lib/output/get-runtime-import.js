import { stringifyRequest } from 'loader-utils';
import { getImportStr } from "../utils/get-import-str.js";
var runtimeFilePath = require.resolve('../../public/runtime.js');
export function getRuntimeImport(loaderContext, esModule) {
  var runtimePath = stringifyRequest(loaderContext, "".concat(runtimeFilePath));
  return "".concat(getImportStr(runtimePath, esModule)('runtime'));
}