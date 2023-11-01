import nunjucks from 'nunjucks';
import { ImportWrapper } from '../import-wrapper/ImportWrapper';

/**
 * Parse `Add` value to expression
 * @example
 *   'foo' + bar + 'qux'
 *
 * @param {nunjucks.nodes.Add} node
 *
 * @returns {ImportWrapper}
 */
export function getAddNodeValue(node) {
  if (!(node instanceof nunjucks.nodes.Add)) {
    throw new TypeError('Wrong node type');
  }
  var stack = [node.left, node.right];
  var value = new ImportWrapper();
  while (stack.length) {
    var _node = stack.shift();
    if (_node instanceof nunjucks.nodes.Add) {
      stack.unshift(_node.left, _node.right);
      continue;
    }
    if (_node instanceof nunjucks.nodes.Literal) {
      value.addLiteral(_node.value);
      continue;
    }
    if (_node instanceof nunjucks.nodes.Symbol) {
      value.addSymbol(_node.value);
      continue;
    }
    throw new TypeError('Unsupported node signature');
  }
  return value;
}