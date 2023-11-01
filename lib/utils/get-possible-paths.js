"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPossiblePaths = getPossiblePaths;
require("core-js/modules/es.array.map.js");
var _resolveSearchPaths = require("./resolve-search-paths");
/**
 * @param {ImportWrapper[]} paths
 * @param {string[]} searchPaths
 * @returns {Array.<[ImportWrapper, ImportWrapper[]]>}
 */
function getPossiblePaths(paths, searchPaths) {
  return paths.map(function (possiblePath) {
    return [possiblePath, (0, _resolveSearchPaths.resolveSearchPaths)(possiblePath, searchPaths)];
  });
}