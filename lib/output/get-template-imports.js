import { getAssets } from './get-assets.js'
import { getExtensions } from './get-extensions.js'
import { getFilters } from './get-filters.js'
import { getGlobals } from './get-globals.js'
import { getRuntimeImport } from './get-runtime-import.js'
import { getTemplateDependenciesImport } from './get-template-dependencies-import.js'

export async function getTemplateImports(loader, esModule, {
    assets,
    dependencies,
    extensions,
    filters,
    globals
}) {
    return `
    ${getRuntimeImport(loader, esModule)}
    ${getTemplateDependenciesImport(loader, esModule, dependencies)}
    ${getGlobals(globals).imports()}
    ${getAssets(assets).imports(loader, esModule)}
    ${getExtensions(extensions).imports()}
    ${await getFilters(filters).imports()}
    `
}
