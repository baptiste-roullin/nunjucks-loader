import "core-js/modules/es.array.map.js";
import { stringifyRequest } from 'loader-utils';
import { ImportLiteral } from './ImportLiteral';
import { isSymbol } from './is-symbol';
import { normalizeTrailingSlash } from './normalize-trailing-slash';
export function stringify(loaderContext, templateImport) {
  function toStringifiedValue(value) {
    if (isSymbol(value)) {
      return value;
    }
    var nextValue = stringifyRequest(loaderContext, value.valueOf());
    return new ImportLiteral(normalizeTrailingSlash(nextValue, value));
  }
  return templateImport.map(toStringifiedValue);
}