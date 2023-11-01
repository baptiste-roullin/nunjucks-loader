"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwNotSymbolOrLiteral = throwNotSymbolOrLiteral;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.object.to-string.js");
var _isNotSymbolOrLiteral = require("./is-not-symbol-or-literal");
/**
 * @param {string} methodName
 * @param {(ImportLiteralOrSymbol | ImportLiteralOrSymbol[])} value
 */
function throwNotSymbolOrLiteral(methodName, value) {
  var assertedValue = [].concat(value);
  if (assertedValue.some(_isNotSymbolOrLiteral.isNotSymbolOrLiteral)) {
    throw new TypeError("".concat(methodName, ": all parts should be a symbol or literal instances"));
  }
}