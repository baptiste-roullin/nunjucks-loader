import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.concat.js";
import { TEMPLATE_DEPENDENCIES } from "../constants.js";
/**
 * @typedef {Object} NunjucksPrecompiled
 * @property {string} name
 * @property {string} template
 */
/**
 * @param {NunjucksPrecompiled[]} templates
 * @returns {string}
 */
export function localVarWrapper(templates) {
  var out = '';
  for (var i = 0; i < templates.length; i++) {
    var _templates$i = templates[i],
      name = _templates$i.name,
      template = _templates$i.template;
    out += "\n            ".concat(TEMPLATE_DEPENDENCIES, ".templates[").concat(JSON.stringify(name), "] = (function() {\n                ").concat(template, "\n            })();\n        ");
  }
  return out;
}