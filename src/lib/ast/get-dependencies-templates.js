function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.array.is-array.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.regexp.exec.js";
import nunjucks from 'nunjucks';
import { ImportWrapper } from "../import-wrapper/ImportWrapper.js";
import { getAddNodeValue } from "./get-add-node-value.js";
/**
 * @param {nunjucks.nodes.Root} nodes
 * @returns {ImportWrapper[]}
 */
export function getDependenciesTemplates(nodes) {
  var extendsNodes = nodes.findAll(nunjucks.nodes.Extends);
  var includeNodes = nodes.findAll(nunjucks.nodes.Include);
  var importNodes = nodes.findAll(nunjucks.nodes.Import);
  var fromImportNodes = nodes.findAll(nunjucks.nodes.FromImport);
  return [].concat(_toConsumableArray(extendsNodes), _toConsumableArray(includeNodes), _toConsumableArray(importNodes), _toConsumableArray(fromImportNodes)).map(function (node) {
    if (typeof node.template.value !== 'string') {
      var templateImport = getAddNodeValue(node.template);
      return new Error("Dynamic templates expressions is not yet supported. Skipping ".concat(templateImport.toString(), "."));
    }
    return new ImportWrapper().addLiteral(node.template.value);
  });
}