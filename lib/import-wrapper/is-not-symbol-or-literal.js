import "core-js/modules/es.array.reduce.js";
import "core-js/modules/es.object.to-string.js";
import { ImportLiteral } from './ImportLiteral';
import { isSymbol } from './is-symbol';
function and() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return fns.reduce(function (a, b) {
      return (a === null || a === void 0 ? void 0 : a.apply(void 0, args)) && b.apply(void 0, args);
    });
  };
}
function not(fn) {
  return function isNot() {
    return !fn.apply(void 0, arguments);
  };
}
function isLiteral(value) {
  return value instanceof ImportLiteral;
}
export var isNotSymbolOrLiteral = and(not(isLiteral), not(isSymbol));