"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = nunjucksLoader;
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _path = _interopRequireDefault(require("path"));
var _constants = require("./lib/constants");
var _doTransform = require("./lib/do-transform");
var _getLoaderOptions = require("./lib/get-loader-options");
var _getImportPath = require("./lib/utils/get-import-path");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function nunjucksLoader(source) {
  var callback = this.async();
  var options = (0, _getLoaderOptions.getLoaderOptions)(this, callback);
  if (options === null) {
    return;
  }
  var normalizedSearchPaths = [].concat(options.searchPaths).map(_path["default"].normalize);
  var resourcePathImport = (0, _getImportPath.getImportPath)(this.resourcePath, normalizedSearchPaths);
  (0, _doTransform.doTransform)(source, this, {
    resourcePathImport: resourcePathImport,
    normalizedSearchPaths: normalizedSearchPaths,
    options: options
  }).then(function (result) {
    callback(null, result);
  }, function (error) {
    if (error.code === _constants.ERROR_MODULE_NOT_FOUND && error.message.includes("'glob'")) {
      return callback(new Error('Attempt to use dynamic assets ' + 'without optional "glob" dependency installed'));
    }
    callback(error);
  });
}