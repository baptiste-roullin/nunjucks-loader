"use strict";

require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optimizeImportLiterals = optimizeImportLiterals;
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.array.concat.js");
var _ImportLiteral = require("./ImportLiteral");
var _getType = require("./get-type");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Squash literals and symbols
 *
 * @param {ImportLiteralOrSymbol[]} importValue
 * @returns {ImportLiteralOrSymbol[]}
 */
function optimizeImportLiterals(importValue) {
  return importValue.reduce(function (importValue, item) {
    var previousItem = importValue.pop();
    if (previousItem === void 0) {
      return [].concat(_toConsumableArray(importValue), [item]);
    }
    var previousType = (0, _getType.getType)(previousItem);
    var type = (0, _getType.getType)(item);
    if (previousType !== type || type === 'ImportSymbol') {
      return [].concat(_toConsumableArray(importValue), [previousItem, item]);
    }
    var nextItem = "".concat(previousItem.valueOf()).concat(item.valueOf());
    var nextValue = new _ImportLiteral.ImportLiteral(nextItem);
    return [].concat(_toConsumableArray(importValue), [nextValue]);
  }, []);
}