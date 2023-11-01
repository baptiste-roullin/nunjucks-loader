import { ImportLiteral } from "./ImportLiteral.js";
import { ImportSymbol } from "./ImportSymbol.js";
import { getType } from "./get-type.js";
it('should return type of instance tag', function () {
  var literalInstance = new ImportLiteral('a');
  expect(getType(literalInstance)).toBe('ImportLiteral');
  var symbolInstance = new ImportSymbol('b');
  expect(getType(symbolInstance)).toBe('ImportSymbol');
});