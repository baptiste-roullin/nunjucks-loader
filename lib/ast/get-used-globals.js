import "core-js/modules/es.function.name.js";
import nunjucks from 'nunjucks';
import { getUsagesOf } from './get-usages-of';

/**
 * @param {nunjucks.nodes.Root}     nodes
 * @param {Object.<string, string>} globals
 * @returns {string[]}
 */
export function getUsedGlobals(nodes, globals) {
  return getUsagesOf(nunjucks.nodes.FunCall, nodes)(globals, function (_ref) {
    var globalName = _ref.name;
    return function (_ref2) {
      var name = _ref2.name;
      return globalName.value === name;
    };
  });
}