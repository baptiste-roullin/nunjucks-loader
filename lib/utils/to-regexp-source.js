import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
var reSafeSymbols = /([.*+?^=!:${}()|[\]/\\])/g;

/**
 * @param {string} str
 * @returns {string}
 */
export function toRegExpSource(str) {
  return str.replace(reSafeSymbols, '\\$1');
}