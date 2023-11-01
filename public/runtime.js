"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = runtime;
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.object.values.js");
var _nunjucksSlim = _interopRequireDefault(require("nunjucks/browser/nunjucks-slim"));
var _WebpackPrecompiledLoader = require("./WebpackPrecompiledLoader");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function runtime(options, _ref) {
  var globals = _ref.globals,
    extensions = _ref.extensions,
    filters = _ref.filters,
    precompiled = _ref.templates;
  if (options.jinjaCompat === true) {
    _nunjucksSlim["default"].installJinjaCompat();
  }
  var env = new _nunjucksSlim["default"].Environment(new _WebpackPrecompiledLoader.WebpackPrecompiledLoader(precompiled), options);
  for (var globalName in globals) {
    if (!Object.prototype.hasOwnProperty.call(globals, globalName)) {
      continue;
    }
    env.addGlobal(globalName, globals[globalName].module);
  }
  for (var extensionName in extensions) {
    if (!Object.prototype.hasOwnProperty.call(extensions, extensionName)) {
      continue;
    }
    env.addExtension(extensionName, extensions[extensionName].module);
  }
  for (var filterName in filters) {
    if (!Object.prototype.hasOwnProperty.call(filters, filterName)) {
      continue;
    }
    env.addFilter(filterName, filters[filterName].module, filters[filterName].async === true);
  }
  return {
    render: function render(name, ctx) {
      return env.render(name, ctx);
    },
    renderAsync: function renderAsync(name, ctx) {
      return new Promise(function renderCallback(resolve, reject) {
        env.render(name, ctx, function (error, response) {
          if (error) {
            return reject(error);
          }
          resolve(response);
        });
      });
    },
    isAsync: function isAsync() {
      return options.isAsyncTemplate === true || Object.values(filters).some(function (_ref2) {
        var async = _ref2.async;
        return async === true;
      });
    }
  };
}