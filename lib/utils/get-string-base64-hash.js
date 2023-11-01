"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStringBase64Hash = getStringBase64Hash;
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
/* eslint-env node */

/**
 * @link https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 * @param {string} str
 * @returns {*}
 */
function getStringHash(str) {
  var hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (var i = 0; i < str.length; i++) {
    var _char = str.charCodeAt(i);
    hash = (hash << 5) - hash + _char;
    hash = hash & hash;
  }
  return hash;
}
function getStringBase64Hash(str) {
  return Buffer.from(String(getStringHash(str))).toString('base64');
}