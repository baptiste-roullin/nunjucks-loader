import { AddonWrapper } from './AddonWrapper.js'

export class FilterWrapper extends AddonWrapper {
    constructor(options) {
        super({
            ...options,
            type: 'filters'
        })
    }

    get dependencyInject() {
        const inject = super.dependencyInject

        return Promise.resolve(this.instance).then(function (instance) {
            return inject.replace(/\n\s*\};$/, `,
              async: ${JSON.stringify(instance.async === true)}
            };`)
        })
    }
}
