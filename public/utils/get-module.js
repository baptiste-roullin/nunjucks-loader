export function getModule(importedSymbol) {
  return (importedSymbol === null || importedSymbol === void 0 ? void 0 : importedSymbol["default"]) || importedSymbol;
}