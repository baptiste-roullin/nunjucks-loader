function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.symbol.iterator.js";
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
import { stringifyRequest } from 'loader-utils';
import { getModule } from '../../public/utils/get-module';
import { IMPORTS_PREFIX, TEMPLATE_DEPENDENCIES } from '../constants';
import { getModuleOutput } from '../output/get-module-output';
import { getImportStr } from '../utils/get-import-str';
import { toVar } from '../utils/to-var';
var _name = /*#__PURE__*/new WeakMap();
var _importPath = /*#__PURE__*/new WeakMap();
var _instance2 = /*#__PURE__*/new WeakMap();
var _type = /*#__PURE__*/new WeakMap();
var _loaderContext = /*#__PURE__*/new WeakMap();
var _es = /*#__PURE__*/new WeakMap();
export var AddonWrapper = /*#__PURE__*/function () {
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
        import(_classPrivateFieldGet(_this, _importPath)).then(function (instance) {
          return getModule(instance);
        }).then(function (_instance) {
          _classPrivateFieldSet(_this, _instance2, _instance);
          return _instance;
        }).then(resolve)["catch"](reject);
      });
    }
  }, {
    key: "importVar",
    get: function get() {
      return toVar("".concat(IMPORTS_PREFIX, "_").concat(_classPrivateFieldGet(this, _type), "_").concat(_classPrivateFieldGet(this, _name)));
    }
  }, {
    key: "importStatement",
    get: function get() {
      return getImportStr(stringifyRequest(_classPrivateFieldGet(this, _loaderContext), _classPrivateFieldGet(this, _importPath)), _classPrivateFieldGet(this, _es))(this.importVar);
    }
  }, {
    key: "dependencyInject",
    get: function get() {
      return "".concat(TEMPLATE_DEPENDENCIES, ".").concat(_classPrivateFieldGet(this, _type), "['").concat(_classPrivateFieldGet(this, _name), "'] = {\n            module: ").concat(getModuleOutput(this.importVar), "\n        };");
    }
  }]);
  return AddonWrapper;
}();