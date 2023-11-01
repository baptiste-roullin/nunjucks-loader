"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.symbol.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddonWrapper = void 0;
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _loaderUtils = require("loader-utils");
var _getModule = require("../../public/utils/get-module");
var _constants = require("../constants");
var _getModuleOutput = require("../output/get-module-output");
var _getImportStr = require("../utils/get-import-str");
var _toVar = require("../utils/to-var");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _name = /*#__PURE__*/new WeakMap();
var _importPath = /*#__PURE__*/new WeakMap();
var _instance2 = /*#__PURE__*/new WeakMap();
var _type = /*#__PURE__*/new WeakMap();
var _loaderContext = /*#__PURE__*/new WeakMap();
var _es = /*#__PURE__*/new WeakMap();
var AddonWrapper = exports.AddonWrapper = /*#__PURE__*/function () {
  function AddonWrapper(_ref) {
    var name = _ref.name,
      importPath = _ref.importPath,
      type = _ref.type,
      es = _ref.es,
      loaderContext = _ref.loaderContext;
    _classCallCheck(this, AddonWrapper);
    _classPrivateFieldInitSpec(this, _name, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _importPath, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _instance2, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _type, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _loaderContext, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _es, {
      writable: true,
      value: false
    });
    if (typeof name !== 'string') {
      throw new TypeError('AddonWrapper: name should be a string');
    }
    _classPrivateFieldSet(this, _name, name);
    if (!importPath) {
      throw new TypeError('AddonWrapper: import path required');
    }
    _classPrivateFieldSet(this, _importPath, importPath);
    if (typeof type !== 'string') {
      throw new TypeError('AddonWrapper: addon type required');
    }
    _classPrivateFieldSet(this, _type, type);
    _classPrivateFieldSet(this, _loaderContext, loaderContext);
    if (typeof es !== 'boolean') {
      throw new TypeError('AddonWrapper: es type should be a boolean');
    }
    _classPrivateFieldSet(this, _es, es === true);
  }
  _createClass(AddonWrapper, [{
    key: "name",
    get: function get() {
      return _classPrivateFieldGet(this, _name);
    }
  }, {
    key: "instance",
    get: function get() {
      var _this = this;
      if (_classPrivateFieldGet(this, _instance2) !== null) {
        return _classPrivateFieldGet(this, _instance2);
      }
      return new Promise(function (resolve, reject) {
        (function (specifier) {
          return new Promise(function (r) {
            return r("".concat(specifier));
          }).then(function (s) {
            return _interopRequireWildcard(require(s));
          });
        })(_classPrivateFieldGet(_this, _importPath)).then(function (instance) {
          return (0, _getModule.getModule)(instance);
        }).then(function (_instance) {
          _classPrivateFieldSet(_this, _instance2, _instance);
          return _instance;
        }).then(resolve)["catch"](reject);
      });
    }
  }, {
    key: "importVar",
    get: function get() {
      return (0, _toVar.toVar)("".concat(_constants.IMPORTS_PREFIX, "_").concat(_classPrivateFieldGet(this, _type), "_").concat(_classPrivateFieldGet(this, _name)));
    }
  }, {
    key: "importStatement",
    get: function get() {
      return (0, _getImportStr.getImportStr)((0, _loaderUtils.stringifyRequest)(_classPrivateFieldGet(this, _loaderContext), _classPrivateFieldGet(this, _importPath)), _classPrivateFieldGet(this, _es))(this.importVar);
    }
  }, {
    key: "dependencyInject",
    get: function get() {
      return "".concat(_constants.TEMPLATE_DEPENDENCIES, ".").concat(_classPrivateFieldGet(this, _type), "['").concat(_classPrivateFieldGet(this, _name), "'] = {\n            module: ").concat((0, _getModuleOutput.getModuleOutput)(this.importVar), "\n        };");
    }
  }]);
  return AddonWrapper;
}();