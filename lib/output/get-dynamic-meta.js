"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDynamicMeta = getDynamicMeta;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
var _constants = require("../constants");
function getDynamicMeta(assetPath, assetImport, _ref) {
  var metaKey = _ref.metaKey,
    importVar = _ref.importVar,
    depsKey = _ref.depsKey;
  var isDynamicImport = assetImport.isDynamic();
  return "".concat(_constants.TEMPLATE_DEPENDENCIES, ".").concat(metaKey, "['").concat(depsKey, "'] = {\n        path: ").concat(isDynamicImport ? assetPath.toRegExp().toString() : JSON.stringify(assetPath.toString()), ",\n        module: ").concat(importVar, "\n    };");
}