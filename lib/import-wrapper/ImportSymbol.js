import { ImportPart } from './ImportPart.js'


export class ImportSymbol extends ImportPart {
    get className() {
        return 'ImportSymbol'
    }

    toString() {
        return String(this.value)
    }

    toGlob() {
        return '*'
    }
}
