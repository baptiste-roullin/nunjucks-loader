"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toVar = toVar;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
function toVar(symb) {
  return symb.replace(/[^a-zA-Z0-9_$]/g, '_');
}