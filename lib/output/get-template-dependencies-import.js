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
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.function.bind.js";
import "core-js/modules/es.array.reduce.js";
import "core-js/modules/es.array.is-array.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.regexp.exec.js";
import { stringifyRequest } from 'loader-utils';
import { IMPORTS_PREFIX, TEMPLATE_DEPENDENCIES } from '../constants';
import { getImportStr } from '../utils/get-import-str';
import { toVar } from '../utils/to-var';
function getAssignments(assignments) {
  if (assignments === '') {
    return '{};';
  }
  return "{".concat(assignments, "};");
}
function joinAssignments(assignment, importVar, key) {
  return [assignment[key], "...".concat(importVar, ".").concat(TEMPLATE_DEPENDENCIES, ".").concat(key)].filter(Boolean).join(',\n');
}
function getImports(imports, assignments) {
  return "\n    const ".concat(TEMPLATE_DEPENDENCIES, " = {};\n    ").concat(imports, "\n    ").concat(TEMPLATE_DEPENDENCIES, ".templates = ").concat(getAssignments(assignments.templates), "\n    ").concat(TEMPLATE_DEPENDENCIES, ".globals = ").concat(getAssignments(assignments.globals), "\n    ").concat(TEMPLATE_DEPENDENCIES, ".extensions = ").concat(getAssignments(assignments.extensions), "\n    ").concat(TEMPLATE_DEPENDENCIES, ".filters = ").concat(getAssignments(assignments.filters), "\n    ").concat(TEMPLATE_DEPENDENCIES, ".assets = ").concat(getAssignments(assignments.assets), "\n    ");
}
function foldDependenciesToImports(loaderContext, esModule, _ref, _ref2, i) {
  var _ref3 = _slicedToArray(_ref, 2),
    imports = _ref3[0],
    assignment = _ref3[1];
  var _ref4 = _slicedToArray(_ref2, 2),
    fullPath = _ref4[1];
  var path = stringifyRequest(loaderContext, fullPath.toString());
  var importVar = toVar("".concat(IMPORTS_PREFIX, "_dep_").concat(i));
  var join = joinAssignments.bind(null, assignment, importVar);
  return ["\n        ".concat(imports, "\n        ").concat(getImportStr(path, esModule)(importVar), "\n        "), {
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
export function getTemplateDependenciesImport(loaderContext, esModule, dependencies) {
  return getImports.apply(void 0, _toConsumableArray(dependencies.reduce(foldDependenciesToImports.bind(null, loaderContext, esModule), ['', {
    templates: '',
    globals: '',
    extensions: '',
    filters: '',
    assets: ''
  }])));
}