import "core-js/modules/es.function.name.js";
import nunjucks from 'nunjucks';
import { getUsagesOf } from "./get-usages-of.js";
/**
 * @template TNode
 * @param {nunjucks.nodes.Root} nodes
 * @param {Array[]}             instances
 * @returns {TNode[]}
 */
export function getUsedFilters(nodes, instances) {
  return getUsagesOf(nunjucks.nodes.Filter, nodes)(instances, function (_ref) {
    var name = _ref.name;
    return function (_ref2) {
      var filterName = _ref2.name;
      return filterName === name.value;
    };
  });
}