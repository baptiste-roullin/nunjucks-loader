"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toRegExpSource = toRegExpSource;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
var reSafeSymbols = /([.*+?^=!:${}()|[\]/\\])/g;

/**
 * @param {string} str
 * @returns {string}
 */
function toRegExpSource(str) {
  return str.replace(reSafeSymbols, '\\$1');
}