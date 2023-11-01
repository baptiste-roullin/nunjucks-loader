import { getImportPath } from './get-import-path';
it('should return shortest path', function () {
  var result = getImportPath('/a/b/c/foo/bar.jpg', ['/c/d/f', '/a/b/c', '/e/f/g']);
  expect(result).toBe('foo/bar.jpg');
});