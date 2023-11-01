"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeTrailingSlash = normalizeTrailingSlash;
require("core-js/modules/es.string.ends-with.js");
var _unquote = require("../utils/unquote");
/**
 * @param {string} filePath
 * @param {ImportLiteral} firstPart
 * @returns {string}
 */
function normalizeTrailingSlash(filePath, firstPart) {
  var path = (0, _unquote.unquote)(filePath);
  var string = firstPart.valueOf();
  if ((string === '' || string.endsWith('/')) && !path.endsWith('/')) {
    return "".concat(path, "/");
  }
  return path;
}