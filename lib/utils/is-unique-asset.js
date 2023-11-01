"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUniqueAsset = void 0;
require("core-js/modules/es.array.find-index.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
var _isUniqueObject = require("./is-unique-object");
var isUniqueAsset = exports.isUniqueAsset = (0, _isUniqueObject.isUniqueObject)(getAssetIndex);
function getAssetIndex(list, item) {
  return list.findIndex(function (listItem) {
    return listItem.toString() === item.toString();
  });
}