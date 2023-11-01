import { ImportWrapper } from '../import-wrapper/ImportWrapper.js'

import { getFirstExistedPath } from './get-first-existed-path.js'

test('should throw for non-existed path', async function () {
    await expect(getFirstExistedPath([
        new ImportWrapper().addLiteral('foo.js'),
        new ImportWrapper().addLiteral('bar.js')
    ])).rejects.toThrow(
        'Path not found'
    )
})
