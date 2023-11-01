"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localVarWrapper = localVarWrapper;
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.concat.js");
var _constants = require("../constants");
/**
 * @typedef {Object} NunjucksPrecompiled
 * @property {string} name
 * @property {string} template
 */

/**
 * @param {NunjucksPrecompiled[]} templates
 * @returns {string}
 */
function localVarWrapper(templates) {
  var out = '';
  for (var i = 0; i < templates.length; i++) {
    var _templates$i = templates[i],
      name = _templates$i.name,
      template = _templates$i.template;
    out += "\n            ".concat(_constants.TEMPLATE_DEPENDENCIES, ".templates[").concat(JSON.stringify(name), "] = (function() {\n                ").concat(template, "\n            })();\n        ");
  }
  return out;
}