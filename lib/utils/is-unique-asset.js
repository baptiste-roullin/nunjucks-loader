import "core-js/modules/es.array.find-index.js";
import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import { isUniqueObject } from './is-unique-object.js';
export var isUniqueAsset = isUniqueObject(getAssetIndex);
function getAssetIndex(list, item) {
  return list.findIndex(function (listItem) {
    return listItem.toString() === item.toString();
  });
}