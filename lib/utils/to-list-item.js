"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toListItem = toListItem;
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.object.to-string.js");
/**
 * @template TNode
 * @param {TNode[]}                   list
 * @param {function(TNode): function} callback
 * @returns {function(Object<TNode>): ?TNode}
 */
function toListItem(list, callback) {
  /**
   * @template TNode
   * @param {Object<TNode>} item
   * @returns {?TNode}
   */
  function findItem(item) {
    return list.find(callback(item));
  }
  return findItem;
}