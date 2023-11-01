import { ImportLiteral } from './ImportLiteral';
import { ImportSymbol } from './ImportSymbol';
import { getType } from './get-type';
it('should return type of instance tag', function () {
  var literalInstance = new ImportLiteral('a');
  expect(getType(literalInstance)).toBe('ImportLiteral');
  var symbolInstance = new ImportSymbol('b');
  expect(getType(symbolInstance)).toBe('ImportSymbol');
});