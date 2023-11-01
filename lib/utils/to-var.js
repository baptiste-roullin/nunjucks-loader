import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
export function toVar(symb) {
  return symb.replace(/[^a-zA-Z0-9_$]/g, '_');
}