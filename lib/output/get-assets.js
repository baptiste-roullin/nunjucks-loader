import { IMPORTS_PREFIX } from '../constants.js'
import { toVar } from '../utils/to-var.js'

import { getDynamicImport } from './get-dynamic-import.js'
import { getDynamicMeta } from './get-dynamic-meta.js'


/**
 * @param {Array.<ImportWrapper[]>} assets
 * @returns {{imports: function(Object, boolean): string}}
 */
export function getAssets(assets) {
    function imports(loaderContext, esModule) {
        return assets.map(function ([assetPath, assetImport]) {
            const uuid = assetPath.getHash()
            const importVar = toVar(
                `${IMPORTS_PREFIX}_asset_${uuid}`
            )
            const importInvocation = getDynamicImport(
                loaderContext,
                assetPath,
                assetImport,
                {
                    esModule,
                    importVar
                }
            )
            const importMeta = getDynamicMeta(assetPath, assetImport, {
                metaKey: 'assets',
                depsKey: assetPath.getHash(),
                importVar
            })

            return `
            ${importInvocation}
            ${importMeta}
            `
        }).join('')
    }

    return {
        imports
    }
}
