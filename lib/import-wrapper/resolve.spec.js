import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import { ImportWrapper } from "./ImportWrapper.js";
import { resolve } from "./resolve.js";
it('should prepend import', function () {
  var path = 'a';
  var templateImport = new ImportWrapper();
  templateImport.addSymbol('b').addLiteral('c');
  var nextPath = resolve(path, templateImport);
  expect(nextPath.toString()).toMatch(/a(\/|\\)" \+ b \+ "c"$/);
  expect(nextPath.toGlob()).toMatch(/a(\/|\\)\*c/);
});
it('should prepend to literal', function () {
  var path = 'a';
  var templateImport = new ImportWrapper();
  templateImport.addLiteral('b').addSymbol('c');
  var nextPath = resolve(path, templateImport);
  expect(nextPath.toString()).toMatch(/a(\/|\\)b" \+ c$/);
  expect(nextPath.toGlob()).toMatch(/a(\/|\\)b\*/);
});