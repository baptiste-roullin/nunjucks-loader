import { WebpackPrecompiledLoader } from './WebpackPrecompiledLoader';
var precompiledTemplateMock = {
  root: function root() {}
};
describe('WebpackPrecompiledLoader', function () {
  describe('getSource', function () {
    describe('template not found', function () {
      test('not precompiled', function () {
        var loader = new WebpackPrecompiledLoader();
        expect(loader.getSource('foo.njk')).toBeNull();
      });
    });
    describe('template return', function () {
      test('returns precompiled template', function () {
        var loader = new WebpackPrecompiledLoader({
          'foo.njk': precompiledTemplateMock
        });
        expect(loader.getSource('foo.njk')).toEqual({
          src: {
            type: 'code',
            obj: precompiledTemplateMock
          },
          path: 'foo.njk'
        });
      });
    });
  });
});