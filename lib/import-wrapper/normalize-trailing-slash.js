import "core-js/modules/es.string.ends-with.js";
import { unquote } from "../utils/unquote.js";
/**
 * @param {string} filePath
 * @param {ImportLiteral} firstPart
 * @returns {string}
 */
export function normalizeTrailingSlash(filePath, firstPart) {
  var path = unquote(filePath);
  var string = firstPart.valueOf();
  if ((string === '' || string.endsWith('/')) && !path.endsWith('/')) {
    return "".concat(path, "/");
  }
  return path;
}