import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import { TEMPLATE_DEPENDENCIES } from "../constants.js";
export function getDynamicMeta(assetPath, assetImport, _ref) {
  var metaKey = _ref.metaKey,
    importVar = _ref.importVar,
    depsKey = _ref.depsKey;
  var isDynamicImport = assetImport.isDynamic();
  return "".concat(TEMPLATE_DEPENDENCIES, ".").concat(metaKey, "['").concat(depsKey, "'] = {\n        path: ").concat(isDynamicImport ? assetPath.toRegExp().toString() : JSON.stringify(assetPath.toString()), ",\n        module: ").concat(importVar, "\n    };");
}