"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsedGlobals = getUsedGlobals;
require("core-js/modules/es.function.name.js");
var _nunjucks = _interopRequireDefault(require("nunjucks"));
var _getUsagesOf = require("./get-usages-of");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * @param {nunjucks.nodes.Root}     nodes
 * @param {Object.<string, string>} globals
 * @returns {string[]}
 */
function getUsedGlobals(nodes, globals) {
  return (0, _getUsagesOf.getUsagesOf)(_nunjucks["default"].nodes.FunCall, nodes)(globals, function (_ref) {
    var globalName = _ref.name;
    return function (_ref2) {
      var name = _ref2.name;
      return globalName.value === name;
    };
  });
}