import { getImportPath } from './get-import-path.js'


it('should return shortest path', function () {
    const result = getImportPath('/a/b/c/foo/bar.jpg', [
        '/c/d/f',
        '/a/b/c',
        '/e/f/g'
    ])

    expect(result).toBe('foo/bar.jpg')
})
