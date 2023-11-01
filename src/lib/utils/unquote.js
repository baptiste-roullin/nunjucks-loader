import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
export function unquote(str) {
  return str.replace(/(^"|"$)/g, '');
}