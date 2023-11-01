"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDynamicImport = getDynamicImport;
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.join.js");
var _loaderUtils = require("loader-utils");
var _stringify = require("../import-wrapper/stringify");
var _getImportStr = require("../utils/get-import-str");
function getDynamicImport(loaderContext, assetPath, assetImport) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    esModule = _ref.esModule,
    importVar = _ref.importVar;
  var args = assetImport.toArgs();
  var isDynamicImport = assetImport.isDynamic();
  var importPath;
  if (isDynamicImport) {
    importPath = (0, _stringify.stringify)(loaderContext, assetImport).toString();
  } else {
    importPath = (0, _loaderUtils.stringifyRequest)(loaderContext, assetImport.toString());
  }
  return isDynamicImport ? "const ".concat(importVar, " = function(").concat(args.join(), ") {\n            return ").concat((0, _getImportStr.getImportStr)(importPath, esModule, true)(), "\n        };") : "".concat((0, _getImportStr.getImportStr)(importPath, esModule)(importVar));
}