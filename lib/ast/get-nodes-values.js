"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodesValues = getNodesValues;
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.array.map.js");
/**
 * @param {nunjucks.nodes.Root} nodes
 * @param {nunjucks.Node}       nodeType
 * @param {Function}            getValue
 * @returns {*}
 */
function getNodesValues(nodes, nodeType, getValue) {
  var nodesOfType = nodes.findAll(nodeType);
  return nodesOfType.map(getValue).filter(Boolean);
}