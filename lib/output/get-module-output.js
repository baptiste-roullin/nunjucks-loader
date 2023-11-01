import "core-js/modules/es.array.concat.js";
export function getModuleOutput(importedSymbol) {
  return "".concat(importedSymbol, " && ").concat(importedSymbol, ".default || ").concat(importedSymbol);
}