import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.join.js";
import { stringifyRequest } from 'loader-utils';
import { stringify } from "../import-wrapper/stringify.js";
import { getImportStr } from "../utils/get-import-str.js";
export function getDynamicImport(loaderContext, assetPath, assetImport) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    esModule = _ref.esModule,
    importVar = _ref.importVar;
  var args = assetImport.toArgs();
  var isDynamicImport = assetImport.isDynamic();
  var importPath;
  if (isDynamicImport) {
    importPath = stringify(loaderContext, assetImport).toString();
  } else {
    importPath = stringifyRequest(loaderContext, assetImport.toString());
  }
  return isDynamicImport ? "const ".concat(importVar, " = function(").concat(args.join(), ") {\n            return ").concat(getImportStr(importPath, esModule, true)(), "\n        };") : "".concat(getImportStr(importPath, esModule)(importVar));
}