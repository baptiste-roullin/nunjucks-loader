"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = stringify;
require("core-js/modules/es.array.map.js");
var _loaderUtils = require("loader-utils");
var _ImportLiteral = require("./ImportLiteral");
var _isSymbol = require("./is-symbol");
var _normalizeTrailingSlash = require("./normalize-trailing-slash");
function stringify(loaderContext, templateImport) {
  function toStringifiedValue(value) {
    if ((0, _isSymbol.isSymbol)(value)) {
      return value;
    }
    var nextValue = (0, _loaderUtils.stringifyRequest)(loaderContext, value.valueOf());
    return new _ImportLiteral.ImportLiteral((0, _normalizeTrailingSlash.normalizeTrailingSlash)(nextValue, value));
  }
  return templateImport.map(toStringifiedValue);
}