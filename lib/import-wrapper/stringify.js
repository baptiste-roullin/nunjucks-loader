import { stringifyRequest } from 'loader-utils'

import { ImportLiteral } from './ImportLiteral.js'
import { isSymbol } from './is-symbol.js'
import { normalizeTrailingSlash } from './normalize-trailing-slash.js'


export function stringify(loaderContext, templateImport) {
    function toStringifiedValue(value) {
        if (isSymbol(value)) {
            return value
        }

        let nextValue = stringifyRequest(loaderContext, value.valueOf())
        return new ImportLiteral(normalizeTrailingSlash(nextValue, value))
    }

    return templateImport.map(toStringifiedValue)
}
