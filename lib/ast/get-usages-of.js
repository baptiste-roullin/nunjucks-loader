import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.find-index.js";
import { toListItem } from '../utils/to-list-item';

/**
 * Filter list of nodes
 *
 * @template TNode
 * @param {nunjucks.nodes.Node} nodeType
 * @param {nunjucks.nodes.Root} nodes
 * @returns {function(TNode[], function(TNode): Function): TNode[]}
 */
export function getUsagesOf(nodeType, nodes) {
  var nodesOfType = nodes.findAll(nodeType);

  /**
   * @template TNode
   * @param {TNode[]} list
   * @param {function(TNode): function} callback
   * @returns {TNode[]}
   */
  function filterNodes(list, callback) {
    return nodesOfType.map(toListItem(list, callback)).filter(Boolean).filter(function (_ref, i, list) {
      var addonName = _ref.name;
      return i === list.findIndex(function (_ref2) {
        var name = _ref2.name;
        return addonName === name;
      });
    });
  }
  return filterNodes;
}