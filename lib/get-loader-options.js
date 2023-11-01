"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoaderOptions = getLoaderOptions;
var _schema = _interopRequireDefault(require("./schema.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function getLoaderOptions(loader, callback) {
  var loaderOptions;
  try {
    loaderOptions = loader.getOptions(_schema["default"]);
  } catch (e) {
    callback(e);
    return null;
  }
  for (var key in _schema["default"].properties) {
    if (!Object.prototype.hasOwnProperty.call(_schema["default"].properties, key) || key in loaderOptions) {
      continue;
    }
    var schemaProp = _schema["default"].properties[key];
    if (!('default' in schemaProp)) {
      continue;
    }
    loaderOptions[key] = schemaProp['default'];
  }
  return loaderOptions;
}