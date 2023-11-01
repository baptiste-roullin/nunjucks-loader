"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModuleOutput = getModuleOutput;
require("core-js/modules/es.array.concat.js");
function getModuleOutput(importedSymbol) {
  return "".concat(importedSymbol, " && ").concat(importedSymbol, ".default || ").concat(importedSymbol);
}