import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.map.js";
export function addonsLoader(list) {
  return Promise.all(list.map(function (item) {
    return Promise.resolve(item.instance).then(function () {
      return item;
    });
  }));
}