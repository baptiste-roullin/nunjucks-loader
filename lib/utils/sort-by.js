"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortBy = sortBy;
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function numericalComparison(a, b) {
  return a - b;
}

/**
 * @param {string} attribute
 * @param {function(*, *): number} [comparison]
 * @returns {function(*, *): number}
 */
function sortBy(attribute) {
  var comparison = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : numericalComparison;
  return function compare(a, b) {
    return comparison(a === null || a === void 0 ? void 0 : a[attribute], b === null || b === void 0 ? void 0 : b[attribute]);
  };
}