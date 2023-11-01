"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebpackPrecompiledLoader = WebpackPrecompiledLoader;
function WebpackPrecompiledLoader() {
  var precompiled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.precompiled = precompiled;
}
WebpackPrecompiledLoader.prototype.getSource = function getSource(name) {
  if (!(name in this.precompiled)) {
    return null;
  }
  return {
    src: {
      type: 'code',
      obj: this.precompiled[name]
    },
    path: name
  };
};