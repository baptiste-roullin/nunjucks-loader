import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import nunjucks from 'nunjucks';
import { getAddNodeValue } from "./get-add-node-value.js";
it('should join add tag', function () {
  var nodes = nunjucks.parser.parse('{{ "a" + "b" + "c" + "d" }}');
  var addNode = nodes.children[0].children[0];
  expect(getAddNodeValue(addNode).toString()).toBe('"a" + "b" + "c" + "d"');
});
it('should join add node with variables', function () {
  var nodes = nunjucks.parser.parse('{{ "a" + b + "c" + d }}');
  var addNode = nodes.children[0].children[0];
  expect(getAddNodeValue(addNode).toString()).toBe('"a" + b + "c" + d');
});