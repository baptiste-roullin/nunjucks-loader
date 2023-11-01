"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsedExtensions = getUsedExtensions;
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
function getUsedExtensions(nodes, instances) {
  return (0, _getUsagesOf.getUsagesOf)(_nunjucks["default"].nodes.CallExtension, nodes)(instances, function (_ref) {
    var extName = _ref.extName;
    return function (_ref2) {
      var name = _ref2.name,
        instance = _ref2.instance;
      // Sometime `extName` is instance of custom tag
      return name === extName || instance === extName;
    };
  });
}