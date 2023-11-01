"use strict";

require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTemplateDependenciesImport = getTemplateDependenciesImport;
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.array.reduce.js");
var _loaderUtils = require("loader-utils");
var _constants = require("../constants");
var _getImportStr = require("../utils/get-import-str");
var _toVar = require("../utils/to-var");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function getAssignments(assignments) {
  if (assignments === '') {
    return '{};';
  }
  return "{".concat(assignments, "};");
}
function joinAssignments(assignment, importVar, key) {
  return [assignment[key], "...".concat(importVar, ".").concat(_constants.TEMPLATE_DEPENDENCIES, ".").concat(key)].filter(Boolean).join(',\n');
}
function getImports(imports, assignments) {
  return "\n    const ".concat(_constants.TEMPLATE_DEPENDENCIES, " = {};\n    ").concat(imports, "\n    ").concat(_constants.TEMPLATE_DEPENDENCIES, ".templates = ").concat(getAssignments(assignments.templates), "\n    ").concat(_constants.TEMPLATE_DEPENDENCIES, ".globals = ").concat(getAssignments(assignments.globals), "\n    ").concat(_constants.TEMPLATE_DEPENDENCIES, ".extensions = ").concat(getAssignments(assignments.extensions), "\n    ").concat(_constants.TEMPLATE_DEPENDENCIES, ".filters = ").concat(getAssignments(assignments.filters), "\n    ").concat(_constants.TEMPLATE_DEPENDENCIES, ".assets = ").concat(getAssignments(assignments.assets), "\n    ");
}
function foldDependenciesToImports(loaderContext, esModule, _ref, _ref2, i) {
  var _ref3 = _slicedToArray(_ref, 2),
    imports = _ref3[0],
    assignment = _ref3[1];
  var _ref4 = _slicedToArray(_ref2, 2),
    fullPath = _ref4[1];
  var path = (0, _loaderUtils.stringifyRequest)(loaderContext, fullPath.toString());
  var importVar = (0, _toVar.toVar)("".concat(_constants.IMPORTS_PREFIX, "_dep_").concat(i));
  var join = joinAssignments.bind(null, assignment, importVar);
  return ["\n        ".concat(imports, "\n        ").concat((0, _getImportStr.getImportStr)(path, esModule)(importVar), "\n        "), {
    templates: join('templates'),
    globals: join('globals'),
    extensions: join('extensions'),
    filters: join('filters'),
    assets: join('assets')
  }];
}

/**
 * Import nested templates dependencies
 *
 * @example
 *     var __nunjucks_module_dependencies__ = {}
 *     import dep0 from './nested-template.njk';
 *     __nunjucks_module_dependencies__.templates = {
 *         ...dep0.__nunjucks_module_dependencies__.templates
 *     };
 *
 * @param {Object} loaderContext
 * @param {boolean} esModule
 * @param {Array<string[]>} dependencies
 * @returns {string}
 */
function getTemplateDependenciesImport(loaderContext, esModule, dependencies) {
  return getImports.apply(void 0, _toConsumableArray(dependencies.reduce(foldDependenciesToImports.bind(null, loaderContext, esModule), ['', {
    templates: '',
    globals: '',
    extensions: '',
    filters: '',
    assets: ''
  }])));
}