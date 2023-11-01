import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.string.includes.js";
import path from 'path';
import { ERROR_MODULE_NOT_FOUND } from './lib/constants.js';
import { doTransform } from './lib/do-transform.js';
import { getLoaderOptions } from './lib/get-loader-options.js';
import { getImportPath } from './lib/utils/get-import-path.js';
export default function nunjucksLoader(source) {
  var callback = this.async();
  var options = getLoaderOptions(this, callback);
  if (options === null) {
    return;
  }
  var normalizedSearchPaths = [].concat(options.searchPaths).map(path.normalize);
  var resourcePathImport = getImportPath(this.resourcePath, normalizedSearchPaths);
  doTransform(source, this, {
    resourcePathImport: resourcePathImport,
    normalizedSearchPaths: normalizedSearchPaths,
    options: options
  }).then(function (result) {
    callback(null, result);
  }, function (error) {
    if (error.code === ERROR_MODULE_NOT_FOUND && error.message.includes("'glob'")) {
      return callback(new Error('Attempt to use dynamic assets ' + 'without optional "glob" dependency installed'));
    }
    callback(error);
  });
}