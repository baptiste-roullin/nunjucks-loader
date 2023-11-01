import { ImportLiteral } from "./ImportLiteral.js";
import { normalizeTrailingSlash } from "./normalize-trailing-slash.js";
it('should append trailing slash', function () {
  var literal = new ImportLiteral('b/');
  expect(normalizeTrailingSlash('a/b', literal)).toBe('a/b/');
});
it('should should preserve trailing slash', function () {
  var literal = new ImportLiteral('b/');
  expect(normalizeTrailingSlash('a/b/', literal)).toBe('a/b/');
});
it('should unquote path', function () {
  var literal = new ImportLiteral('b/');
  expect(normalizeTrailingSlash('"a/b"', literal)).toBe('a/b/');
});