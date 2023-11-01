"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolve = resolve;
require("core-js/modules/es.array.concat.js");
var _path = _interopRequireDefault(require("path"));
var _ImportLiteral = require("./ImportLiteral");
var _ImportSymbol = require("./ImportSymbol");
var _normalizeTrailingSlash = require("./normalize-trailing-slash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Joins template import with another path
 *
 * @param {string} prependPath
 * @param {ImportWrapper} templateImport
 */
function resolve(prependPath, templateImport) {
  var _templateImport = templateImport.concat();
  var firstPart = _templateImport.shift();
  if (firstPart instanceof _ImportSymbol.ImportSymbol) {
    _templateImport.unshift(firstPart);
    firstPart = '';
  }
  var filePath = (0, _normalizeTrailingSlash.normalizeTrailingSlash)(_path["default"].resolve(prependPath, firstPart.valueOf()), firstPart);
  _templateImport.unshift(new _ImportLiteral.ImportLiteral(filePath));
  return _templateImport;
}