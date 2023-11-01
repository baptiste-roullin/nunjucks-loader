import "core-js/modules/es.function.name.js";
import nunjucks from 'nunjucks';
import { getUsagesOf } from "./get-usages-of.js";
/**
 * @template TNode
 * @param {nunjucks.nodes.Root} nodes
 * @param {Array[]}             instances
 * @returns {TNode[]}
 */
export function getUsedExtensions(nodes, instances) {
  return getUsagesOf(nunjucks.nodes.CallExtension, nodes)(instances, function (_ref) {
    var extName = _ref.extName;
    return function (_ref2) {
      var name = _ref2.name,
        instance = _ref2.instance;
      // Sometime `extName` is instance of custom tag
      return name === extName || instance === extName;
    };
  });
}