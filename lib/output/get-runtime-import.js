"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRuntimeImport = getRuntimeImport;
var _loaderUtils = require("loader-utils");
var _getImportStr = require("../utils/get-import-str");
var runtimeFilePath = require.resolve('../../public/runtime.js');
function getRuntimeImport(loaderContext, esModule) {
  var runtimePath = (0, _loaderUtils.stringifyRequest)(loaderContext, "".concat(runtimeFilePath));
  return "".concat((0, _getImportStr.getImportStr)(runtimePath, esModule)('runtime'));
}