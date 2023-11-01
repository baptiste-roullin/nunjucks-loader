import "core-js/modules/es.array.concat.js";
import { ASSETS_KEY } from '../../public/static-extension/contants';
import { TEMPLATE_DEPENDENCIES } from '../constants';
import { getModuleOutput } from './get-module-output';
export function getLoaderOutput(_ref) {
  var templateImport = _ref.templateImport,
    imports = _ref.imports,
    defaultExport = _ref.defaultExport,
    precompiled = _ref.precompiled,
    envOptions = _ref.envOptions;
  return "\n        ".concat(imports, "\n        ").concat(precompiled, "\n\n        function nunjucksTemplate(ctx = {}) {\n            const templateContext = {\n                ").concat(ASSETS_KEY, ": ").concat(TEMPLATE_DEPENDENCIES, ".assets,\n                ...ctx\n            };\n\n            var nunjucks = (").concat(getModuleOutput('runtime'), ")(\n                ").concat(envOptions, ",\n                ").concat(TEMPLATE_DEPENDENCIES, "\n            );\n\n            if (nunjucks.isAsync()) {\n                return nunjucks.renderAsync(\n                    ").concat(templateImport, ",\n                    templateContext\n                );\n            }\n        \n            return nunjucks.render(\n                ").concat(templateImport, ",\n                templateContext\n            );\n        };\n\n        nunjucksTemplate.__nunjucks_precompiled_template__ = ").concat(TEMPLATE_DEPENDENCIES, ".templates[").concat(templateImport, "];\n        nunjucksTemplate.").concat(TEMPLATE_DEPENDENCIES, " = ").concat(TEMPLATE_DEPENDENCIES, ";\n\n        ").concat(defaultExport, " nunjucksTemplate;\n    ");
}