"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsagesOf = getUsagesOf;
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.find-index.js");
var _toListItem = require("../utils/to-list-item");
/**
 * Filter list of nodes
 *
 * @template TNode
 * @param {nunjucks.nodes.Node} nodeType
 * @param {nunjucks.nodes.Root} nodes
 * @returns {function(TNode[], function(TNode): Function): TNode[]}
 */
function getUsagesOf(nodeType, nodes) {
  var nodesOfType = nodes.findAll(nodeType);

  /**
   * @template TNode
   * @param {TNode[]} list
   * @param {function(TNode): function} callback
   * @returns {TNode[]}
   */
  function filterNodes(list, callback) {
    return nodesOfType.map((0, _toListItem.toListItem)(list, callback)).filter(Boolean).filter(function (_ref, i, list) {
      var addonName = _ref.name;
      return i === list.findIndex(function (_ref2) {
        var name = _ref2.name;
        return addonName === name;
      });
    });
  }
  return filterNodes;
}