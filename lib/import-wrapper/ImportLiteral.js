import { ImportPart } from './ImportPart.js'


export class ImportLiteral extends ImportPart {
    get className() {
        return 'ImportLiteral'
    }

    toString() {
        return `"${this.value}"`
    }

    toGlob() {
        return String(this.value)
    }
}
