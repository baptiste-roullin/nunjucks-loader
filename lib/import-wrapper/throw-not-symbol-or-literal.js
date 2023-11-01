import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.some.js";
import "core-js/modules/es.object.to-string.js";
import { isNotSymbolOrLiteral } from "./is-not-symbol-or-literal.js";
/**
 * @param {string} methodName
 * @param {(ImportLiteralOrSymbol | ImportLiteralOrSymbol[])} value
 */
export function throwNotSymbolOrLiteral(methodName, value) {
  var assertedValue = [].concat(value);
  if (assertedValue.some(isNotSymbolOrLiteral)) {
    throw new TypeError("".concat(methodName, ": all parts should be a symbol or literal instances"));
  }
}