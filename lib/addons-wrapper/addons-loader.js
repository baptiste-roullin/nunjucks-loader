"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addonsLoader = addonsLoader;
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.map.js");
function addonsLoader(list) {
  return Promise.all(list.map(function (item) {
    return Promise.resolve(item.instance).then(function () {
      return item;
    });
  }));
}