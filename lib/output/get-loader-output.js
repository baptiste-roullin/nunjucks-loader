"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoaderOutput = getLoaderOutput;
require("core-js/modules/es.array.concat.js");
var _contants = require("../../public/static-extension/contants");
var _constants = require("../constants");
var _getModuleOutput = require("./get-module-output");
function getLoaderOutput(_ref) {
  var templateImport = _ref.templateImport,
    imports = _ref.imports,
    defaultExport = _ref.defaultExport,
    precompiled = _ref.precompiled,
    envOptions = _ref.envOptions;
  return "\n        ".concat(imports, "\n        ").concat(precompiled, "\n\n        function nunjucksTemplate(ctx = {}) {\n            const templateContext = {\n                ").concat(_contants.ASSETS_KEY, ": ").concat(_constants.TEMPLATE_DEPENDENCIES, ".assets,\n                ...ctx\n            };\n\n            var nunjucks = (").concat((0, _getModuleOutput.getModuleOutput)('runtime'), ")(\n                ").concat(envOptions, ",\n                ").concat(_constants.TEMPLATE_DEPENDENCIES, "\n            );\n\n            if (nunjucks.isAsync()) {\n                return nunjucks.renderAsync(\n                    ").concat(templateImport, ",\n                    templateContext\n                );\n            }\n        \n            return nunjucks.render(\n                ").concat(templateImport, ",\n                templateContext\n            );\n        };\n\n        nunjucksTemplate.__nunjucks_precompiled_template__ = ").concat(_constants.TEMPLATE_DEPENDENCIES, ".templates[").concat(templateImport, "];\n        nunjucksTemplate.").concat(_constants.TEMPLATE_DEPENDENCIES, " = ").concat(_constants.TEMPLATE_DEPENDENCIES, ";\n\n        ").concat(defaultExport, " nunjucksTemplate;\n    ");
}