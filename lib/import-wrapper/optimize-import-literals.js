function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import "core-js/modules/es.array.reduce.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.is-array.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.regexp.exec.js";
import { ImportLiteral } from "./ImportLiteral.js";
import { getType } from "./get-type.js";
/**
 * Squash literals and symbols
 *
 * @param {ImportLiteralOrSymbol[]} importValue
 * @returns {ImportLiteralOrSymbol[]}
 */
export function optimizeImportLiterals(importValue) {
  return importValue.reduce(function (importValue, item) {
    var previousItem = importValue.pop();
    if (previousItem === void 0) {
      return [].concat(_toConsumableArray(importValue), [item]);
    }
    var previousType = getType(previousItem);
    var type = getType(item);
    if (previousType !== type || type === 'ImportSymbol') {
      return [].concat(_toConsumableArray(importValue), [previousItem, item]);
    }
    var nextItem = "".concat(previousItem.valueOf()).concat(item.valueOf());
    var nextValue = new ImportLiteral(nextItem);
    return [].concat(_toConsumableArray(importValue), [nextValue]);
  }, []);
}