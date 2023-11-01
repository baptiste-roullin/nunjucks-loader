import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import { ImportSymbol } from "./ImportSymbol.js";
describe('toString', function () {
  it('should return raw string', function () {
    expect(new ImportSymbol('a').toString()).toBe('a');
  });
});
describe('toGlob', function () {
  it('should return star', function () {
    expect(new ImportSymbol('a').toGlob()).toBe('*');
  });
});