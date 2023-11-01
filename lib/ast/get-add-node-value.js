"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddNodeValue = getAddNodeValue;
var _nunjucks = _interopRequireDefault(require("nunjucks"));
var _ImportWrapper = require("../import-wrapper/ImportWrapper");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Parse `Add` value to expression
 * @example
 *   'foo' + bar + 'qux'
 *
 * @param {nunjucks.nodes.Add} node
 *
 * @returns {ImportWrapper}
 */
function getAddNodeValue(node) {
  if (!(node instanceof _nunjucks["default"].nodes.Add)) {
    throw new TypeError('Wrong node type');
  }
  var stack = [node.left, node.right];
  var value = new _ImportWrapper.ImportWrapper();
  while (stack.length) {
    var _node = stack.shift();
    if (_node instanceof _nunjucks["default"].nodes.Add) {
      stack.unshift(_node.left, _node.right);
      continue;
    }
    if (_node instanceof _nunjucks["default"].nodes.Literal) {
      value.addLiteral(_node.value);
      continue;
    }
    if (_node instanceof _nunjucks["default"].nodes.Symbol) {
      value.addSymbol(_node.value);
      continue;
    }
    throw new TypeError('Unsupported node signature');
  }
  return value;
}