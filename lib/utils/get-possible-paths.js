import "core-js/modules/es.array.map.js";
import { resolveSearchPaths } from './resolve-search-paths.js';

/**
 * @param {ImportWrapper[]} paths
 * @param {string[]} searchPaths
 * @returns {Array.<[ImportWrapper, ImportWrapper[]]>}
 */
export function getPossiblePaths(paths, searchPaths) {
  return paths.map(function (possiblePath) {
    return [possiblePath, resolveSearchPaths(possiblePath, searchPaths)];
  });
}