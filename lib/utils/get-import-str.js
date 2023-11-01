"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImportStr = getImportStr;
require("core-js/modules/es.array.concat.js");
/**
 * @param {string} path
 * @param {boolean} [esModule]
 * @param {boolean} [isDynamic]
 * @returns {function(string, string): string}
 */
function getImportStr(path, esModule, isDynamic) {
  var isES = esModule === true;

  /**
   * @param {string} [name] Variable name to be used
   * @param {string} [sym]  Module symbol to be imported
   * @returns {string}
   */
  function getImportInvocationString(name, sym) {
    if (isDynamic && isES) {
      return "import(".concat(path, ");");
    }
    if (name && sym && isES) {
      return "import {".concat(sym, " as ").concat(name, "} from ").concat(path, ";");
    }
    if (name && isES) {
      return "import ".concat(name, " from ").concat(path, ";");
    }
    if (name && sym) {
      return "const ".concat(name, " = require(").concat(path, ").").concat(sym, ";");
    }
    if (name) {
      return "const ".concat(name, " = require(").concat(path, ");");
    }
    if (isDynamic) {
      return "require(".concat(path, ");");
    }
    throw new Error('Import var name required');
  }
  return getImportInvocationString;
}