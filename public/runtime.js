import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/es.array.some.js'
import 'core-js/modules/es.object.values.js'
import nunjucks from 'nunjucks/browser/nunjucks-slim.js'

import { WebpackPrecompiledLoader } from './WebpackPrecompiledLoader.js'
export default function runtime(options, _ref) {
  var globals = _ref.globals,
    extensions = _ref.extensions,
    filters = _ref.filters,
    precompiled = _ref.templates
  if (options.jinjaCompat === true) {
    nunjucks.installJinjaCompat()
  }
  var env = new nunjucks.Environment(new WebpackPrecompiledLoader(precompiled), options)
  for (var globalName in globals) {
    if (!Object.prototype.hasOwnProperty.call(globals, globalName)) {
      continue
    }
    env.addGlobal(globalName, globals[globalName].module)
  }
  for (var extensionName in extensions) {
    if (!Object.prototype.hasOwnProperty.call(extensions, extensionName)) {
      continue
    }
    env.addExtension(extensionName, extensions[extensionName].module)
  }
  for (var filterName in filters) {
    if (!Object.prototype.hasOwnProperty.call(filters, filterName)) {
      continue
    }
    env.addFilter(filterName, filters[filterName].module, filters[filterName].async === true)
  }
  return {
    render: function render(name, ctx) {
      return env.render(name, ctx)
    },
    renderAsync: function renderAsync(name, ctx) {
      return new Promise(function renderCallback(resolve, reject) {
        env.render(name, ctx, function (error, response) {
          if (error) {
            return reject(error)
          }
          resolve(response)
        })
      })
    },
    isAsync: function isAsync() {
      return options.isAsyncTemplate === true || Object.values(filters).some(function (_ref2) {
        var async = _ref2.async
        return async === true
      })
    }
  }
}