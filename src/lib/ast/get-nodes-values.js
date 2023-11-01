import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.map.js";
/**
 * @param {nunjucks.nodes.Root} nodes
 * @param {nunjucks.Node}       nodeType
 * @param {Function}            getValue
 * @returns {*}
 */
export function getNodesValues(nodes, nodeType, getValue) {
  var nodesOfType = nodes.findAll(nodeType);
  return nodesOfType.map(getValue).filter(Boolean);
}