import { ImportSymbol } from './ImportSymbol.js'


export function isSymbol(value) {
    return value instanceof ImportSymbol
}
