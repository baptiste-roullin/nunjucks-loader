"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unquote = unquote;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
function unquote(str) {
  return str.replace(/(^"|"$)/g, '');
}