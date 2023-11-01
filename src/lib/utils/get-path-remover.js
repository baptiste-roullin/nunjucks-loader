import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
import path from 'path';

/**
 * Returns a function that removes path from given one
 *
 * @param {string} targetPath
 * @returns {function(string): string}
 */
export function getPathRemover(targetPath) {
  var normalizedTargetPath = path.resolve(targetPath);

  /**
   * @param {string} pathToRemove
   * @returns {string}
   */
  function removePath(pathToRemove) {
    return normalizedTargetPath.replace(path.resolve(pathToRemove), '').replace(/^[\\/]/, '');
  }
  return removePath;
}