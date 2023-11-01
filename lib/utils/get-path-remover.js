"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPathRemover = getPathRemover;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Returns a function that removes path from given one
 *
 * @param {string} targetPath
 * @returns {function(string): string}
 */
function getPathRemover(targetPath) {
  var normalizedTargetPath = _path["default"].resolve(targetPath);

  /**
   * @param {string} pathToRemove
   * @returns {string}
   */
  function removePath(pathToRemove) {
    return normalizedTargetPath.replace(_path["default"].resolve(pathToRemove), '').replace(/^[\\/]/, '');
  }
  return removePath;
}