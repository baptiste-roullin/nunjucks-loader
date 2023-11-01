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
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDependenciesTemplates = getDependenciesTemplates;
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
var _nunjucks = _interopRequireDefault(require("nunjucks"));
var _ImportWrapper = require("../import-wrapper/ImportWrapper");
var _getAddNodeValue = require("./get-add-node-value");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {nunjucks.nodes.Root} nodes
 * @returns {ImportWrapper[]}
 */
function getDependenciesTemplates(nodes) {
  var extendsNodes = nodes.findAll(_nunjucks["default"].nodes.Extends);
  var includeNodes = nodes.findAll(_nunjucks["default"].nodes.Include);
  var importNodes = nodes.findAll(_nunjucks["default"].nodes.Import);
  var fromImportNodes = nodes.findAll(_nunjucks["default"].nodes.FromImport);
  return [].concat(_toConsumableArray(extendsNodes), _toConsumableArray(includeNodes), _toConsumableArray(importNodes), _toConsumableArray(fromImportNodes)).map(function (node) {
    if (typeof node.template.value !== 'string') {
      var templateImport = (0, _getAddNodeValue.getAddNodeValue)(node.template);
      return new Error("Dynamic templates expressions is not yet supported. Skipping ".concat(templateImport.toString(), "."));
    }
    return new _ImportWrapper.ImportWrapper().addLiteral(node.template.value);
  });
}