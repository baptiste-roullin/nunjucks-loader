"use strict";

require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAssets = getAssets;
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.concat.js");
var _constants = require("../constants");
var _toVar = require("../utils/to-var");
var _getDynamicImport = require("./get-dynamic-import");
var _getDynamicMeta = require("./get-dynamic-meta");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @param {Array.<ImportWrapper[]>} assets
 * @returns {{imports: function(Object, boolean): string}}
 */
function getAssets(assets) {
  function imports(loaderContext, esModule) {
    return assets.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        assetPath = _ref2[0],
        assetImport = _ref2[1];
      var uuid = assetPath.getHash();
      var importVar = (0, _toVar.toVar)("".concat(_constants.IMPORTS_PREFIX, "_asset_").concat(uuid));
      var importInvocation = (0, _getDynamicImport.getDynamicImport)(loaderContext, assetPath, assetImport, {
        esModule: esModule,
        importVar: importVar
      });
      var importMeta = (0, _getDynamicMeta.getDynamicMeta)(assetPath, assetImport, {
        metaKey: 'assets',
        depsKey: assetPath.getHash(),
        importVar: importVar
      });
      return "\n            ".concat(importInvocation, "\n            ").concat(importMeta, "\n            ");
    }).join('');
  }
  return {
    imports: imports
  };
}