"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsedFilters = getUsedFilters;
require("core-js/modules/es.function.name.js");
var _nunjucks = _interopRequireDefault(require("nunjucks"));
var _getUsagesOf = require("./get-usages-of");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * @template TNode
 * @param {nunjucks.nodes.Root} nodes
 * @param {Array[]}             instances
 * @returns {TNode[]}
 */
function getUsedFilters(nodes, instances) {
  return (0, _getUsagesOf.getUsagesOf)(_nunjucks["default"].nodes.Filter, nodes)(instances, function (_ref) {
    var name = _ref.name;
    return function (_ref2) {
      var filterName = _ref2.name;
      return filterName === name.value;
    };
  });
}