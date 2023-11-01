import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.concat.js";
export function getGlobals(globals) {
  function imports() {
    return globals.map(function (_ref) {
      var importStatement = _ref.importStatement,
        dependencyInject = _ref.dependencyInject;
      return "\n            ".concat(importStatement, "\n            ").concat(dependencyInject);
    }).join('');
  }
  return {
    imports: imports
  };
}