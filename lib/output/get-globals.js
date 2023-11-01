"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobals = getGlobals;
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.concat.js");
function getGlobals(globals) {
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