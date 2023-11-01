"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.function.name.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportWrapper = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
var _getStringBase64Hash = require("../utils/get-string-base64-hash");
var _toRegexpSource = require("../utils/to-regexp-source");
var _unquote = require("../utils/unquote");
var _ImportLiteral = require("./ImportLiteral");
var _ImportSymbol = require("./ImportSymbol");
var _getType = require("./get-type");
var _isSymbol = require("./is-symbol");
var _optimizeImportLiterals = require("./optimize-import-literals");
var _throwNotSymbolOrLiteral = require("./throw-not-symbol-or-literal");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function setImportValue(instance, importValue) {
  instance.importValue = importValue;
  instance._optimizedImportValue = (0, _optimizeImportLiterals.optimizeImportLiterals)(importValue);
}

/**
 * @typedef {(ImportLiteral | ImportSymbol)} ImportLiteralOrSymbol
 */

/**
 * Wrapper for manage import strings
 */
var ImportWrapper = exports.ImportWrapper = /*#__PURE__*/function () {
  function ImportWrapper() {
    var importValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    _classCallCheck(this, ImportWrapper);
    var value = [].concat(importValue);
    (0, _throwNotSymbolOrLiteral.throwNotSymbolOrLiteral)('ImportWrapper', value);
    this.importValue = null;
    this._optimizedImportValue = null;
    setImportValue(this, value);
  }

  /**
   * @param {ImportLiteralOrSymbol[]} value
   * @returns {ImportWrapper}
   */
  _createClass(ImportWrapper, [{
    key: "push",
    value: function push() {
      for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
        value[_key] = arguments[_key];
      }
      (0, _throwNotSymbolOrLiteral.throwNotSymbolOrLiteral)('ImportWrapper#push', value);
      setImportValue(this, [].concat(_toConsumableArray(this.importValue), value));
      return this;
    }

    /**
     * @param {...string} value
     * @returns {ImportWrapper}
     */
  }, {
    key: "addSymbol",
    value: function addSymbol() {
      for (var _len2 = arguments.length, value = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        value[_key2] = arguments[_key2];
      }
      return this.push.apply(this, _toConsumableArray(value.map(function (value) {
        return new _ImportSymbol.ImportSymbol(value);
      })));
    }

    /**
     * @param {...string} value
     * @returns {ImportWrapper}
     */
  }, {
    key: "addLiteral",
    value: function addLiteral() {
      for (var _len3 = arguments.length, value = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        value[_key3] = arguments[_key3];
      }
      return this.push.apply(this, _toConsumableArray(value.map(function (value) {
        return new _ImportLiteral.ImportLiteral(value);
      })));
    }

    /**
     * @returns {ImportLiteralOrSymbol}
     */
  }, {
    key: "shift",
    value: function shift() {
      var _this$importValue = _toArray(this.importValue),
        item = _this$importValue[0],
        importValue = _this$importValue.slice(1);
      setImportValue(this, importValue);
      return item;
    }

    /**
     * @param {...ImportLiteralOrSymbol} value
     * @returns {ImportWrapper}
     */
  }, {
    key: "unshift",
    value: function unshift() {
      for (var _len4 = arguments.length, value = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        value[_key4] = arguments[_key4];
      }
      if (value.length === 0) {
        return this;
      }
      (0, _throwNotSymbolOrLiteral.throwNotSymbolOrLiteral)('ImportWrapper#unshift', value);
      setImportValue(this, [].concat(value, _toConsumableArray(this.importValue)));
      return this;
    }

    /**
     * @param {...ImportLiteralOrSymbol} value
     * @returns {ImportWrapper}
     */
  }, {
    key: "concat",
    value: function concat() {
      for (var _len5 = arguments.length, value = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        value[_key5] = arguments[_key5];
      }
      return new ImportWrapper([].concat(_toConsumableArray(this.importValue), value));
    }
  }, {
    key: "map",
    value: function map(callback) {
      return new ImportWrapper(this.importValue.map(callback));
    }

    /**
     * @param {string} str
     * @returns {boolean}
     */
  }, {
    key: "startsWith",
    value: function startsWith(str) {
      var _this$_optimizedImpor = _slicedToArray(this._optimizedImportValue, 1),
        item = _this$_optimizedImpor[0];
      if ((0, _getType.getType)(item) !== 'ImportLiteral' || item === void 0) {
        return false;
      }
      return item.value.startsWith(str);
    }
  }, {
    key: "isDynamic",
    value: function isDynamic() {
      return this.importValue.some(_isSymbol.isSymbol);
    }
  }, {
    key: "getHash",
    value: function getHash() {
      return (0, _getStringBase64Hash.getStringBase64Hash)(this.toString());
    }

    /**
     * @returns {string}
     */
  }, {
    key: "toString",
    value: function toString() {
      var string = this.importValue.join(' + ');
      if (this.isDynamic()) {
        return string;
      }
      if (this.importValue.length === 1) {
        return (0, _unquote.unquote)(string);
      }
      return string;
    }

    /**
     * @returns {string}
     */
  }, {
    key: "toGlob",
    value: function toGlob() {
      return this.importValue.reduce(function toGlob(glob, item) {
        if (!glob) {
          return item.toGlob();
        }
        return "".concat(glob).concat(item.toGlob());
      }, '');
    }

    /**
     * List of all dynamic parts values
     *
     * @returns {string[]}
     */
  }, {
    key: "toArgs",
    value: function toArgs() {
      return this.importValue.filter(_isSymbol.isSymbol).map(function toValue(item) {
        return item.valueOf();
      });
    }
  }, {
    key: "toRegExp",
    value: function toRegExp() {
      var regexpSource = this.importValue.reduce(function (regex, value) {
        var valueRegexp;
        if ((0, _isSymbol.isSymbol)(value)) {
          valueRegexp = '(.+)';
        } else {
          valueRegexp = (0, _toRegexpSource.toRegExpSource)(value.valueOf());
        }
        if (regex === '') {
          return valueRegexp;
        }
        return "".concat(regex).concat(valueRegexp);
      }, '');
      return new RegExp("".concat(regexpSource, "$"));
    }
  }]);
  return ImportWrapper;
}();