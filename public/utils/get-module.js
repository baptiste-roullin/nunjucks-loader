"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModule = getModule;
function getModule(importedSymbol) {
  return (importedSymbol === null || importedSymbol === void 0 ? void 0 : importedSymbol["default"]) || importedSymbol;
}