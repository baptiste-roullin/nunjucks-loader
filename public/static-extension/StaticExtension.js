"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.function.name.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticExtension = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
var _getModule = require("../utils/get-module");
var _getRegexMatches = require("../utils/get-regex-matches");
var _contants = require("./contants");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var StaticExtension = exports.StaticExtension = /*#__PURE__*/function () {
  function StaticExtension() {
    _classCallCheck(this, StaticExtension);
    this.tags = ['static'];
  }
  _createClass(StaticExtension, [{
    key: "parse",
    value: function parse(parser, nodes) {
      var token = parser.nextToken();
      var assetPath = parser.parseExpression();
      var args = new nodes.NodeList();
      args.addChild(assetPath);
      if (parser.skipSymbol('as')) {
        var alias = parser.parsePrimary();
        args.addChild(new nodes.Literal(alias.lineno, alias.colno, alias.value));
      }
      parser.advanceAfterBlockEnd(token.value);
      return new nodes.CallExtensionAsync(this, 'run', args);
    }
  }, {
    key: "run",
    value: function run() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var callback = args.pop();
      var context = args[0],
        url = args[1],
        exportVar = args[2];
      var assets = context.lookup(_contants.ASSETS_KEY);
      var asset;
      for (var assetUUID in assets) {
        if (!Object.prototype.hasOwnProperty.call(assets, assetUUID)) {
          continue;
        }
        var assetMeta = assets[assetUUID];
        if (typeof assetMeta.path !== 'string' && assetMeta.path.test(url)) {
          asset = assetMeta;
        } else if (assetMeta.path === url) {
          asset = assetMeta;
        }
        if (asset) {
          break;
        }
      }
      if (!asset) {
        return callback(new Error("StaticExtension: cannot find module ".concat(JSON.stringify(url))));
      }
      var assetModule = (0, _getModule.getModule)(asset.module);
      if (typeof assetModule === 'function') {
        var _args = (0, _getRegexMatches.getRegexMatches)(url, asset.path);
        Promise.resolve(assetModule.apply(void 0, _toConsumableArray(_args))).then(function (assetModule) {
          var asset = (0, _getModule.getModule)(assetModule);
          if (exportVar) {
            context.setVariable(exportVar, asset);
            return callback(null, '');
          }
          callback(null, asset);
        }, function (error) {
          callback(error);
        });
        return;
      }
      if (exportVar) {
        context.setVariable(exportVar, assetModule);
        return callback(null, '');
      }
      callback(null, assetModule);
    }
  }]);
  return StaticExtension;
}();