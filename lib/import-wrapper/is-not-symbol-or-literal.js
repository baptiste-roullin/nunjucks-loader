import { ImportLiteral } from './ImportLiteral.js'
import { isSymbol } from './is-symbol.js'


function and(...fns) {
    return function (...args) {
        return fns.reduce(function (a, b) {
            return a?.(...args) && b(...args)
        })
    }
}

function not(fn) {
    return function isNot(...args) {
        return !(fn(...args))
    }
}

function isLiteral(value) {
    return value instanceof ImportLiteral
}

export const isNotSymbolOrLiteral = and(not(isLiteral), not(isSymbol))
