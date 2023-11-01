import { getPathRemover } from './get-path-remover.js'
import { sortBy } from './sort-by.js'


const isWindows = process.platform === 'win32'
const sortByLength = sortBy('length')

/**
 * @param {string}   resourcePath
 * @param {string[]} searchPaths
 * @returns {string}
 */
export function getImportPath(resourcePath, searchPaths) {
    const removeSearchPath = getPathRemover(resourcePath)
    let [importPath] = searchPaths.map(removeSearchPath).sort(sortByLength)

    if (isWindows) {
        importPath = importPath.replace(/\\/g, '/')
    }

    return importPath
}
