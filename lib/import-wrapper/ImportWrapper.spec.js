import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.string.starts-with.js";
import "core-js/modules/es.regexp.exec.js";
import { ImportLiteral } from "./ImportLiteral.js";
import { ImportSymbol } from "./ImportSymbol.js";
import { ImportWrapper } from "./ImportWrapper.js";
describe('constructor', function () {
  it('should accept literals and symbols', function () {
    expect(function () {
      return new ImportWrapper([new ImportLiteral('a'), new ImportSymbol('b')]);
    }).not.toThrowError();
  });
  it('should throw for wrong args', function () {
    expect(function () {
      return new ImportWrapper([new ImportLiteral('a'), new ImportSymbol('b'), 'c']);
    }).toThrowError('ImportWrapper: all parts should be a symbol or literal instances');
  });
});
describe('push', function () {
  it('should insert new part', function () {
    var importPath = new ImportWrapper();
    importPath.addSymbol('a').addLiteral('b');
    importPath.push(new ImportSymbol('c'));
    expect(importPath.toString()).toBe('a + "b" + c');
  });
});
describe('shift', function () {
  it('should return first item', function () {
    var importPath = new ImportWrapper();
    importPath.addSymbol('a').addLiteral('b');
    expect(importPath.shift().toString()).toBe('a');
  });
});
describe('unshift', function () {
  it('should prepend items', function () {
    var importPath = new ImportWrapper();
    importPath.addLiteral('b');
    importPath.unshift(new ImportSymbol('a'));
    expect(importPath.toString()).toBe('a + "b"');
  });
});
describe('concat', function () {
  it('should return new instance', function () {
    var importPath = new ImportWrapper();
    var clone = importPath.concat();
    expect(importPath).not.toBe(clone);
  });
});
describe('startsWith', function () {
  it('should return bool with literals', function () {
    var templateImport = new ImportWrapper();
    templateImport.addLiteral('a').addLiteral('b').addSymbol('c');
    expect(templateImport.startsWith('abc')).toBe(false);
    expect(templateImport.startsWith('ab')).toBe(true);
    expect(templateImport.startsWith('a')).toBe(true);
  });
  it('should return bool with symbol', function () {
    var templateImport = new ImportWrapper();
    templateImport.addSymbol('a').addLiteral('b').addSymbol('c');
    expect(templateImport.startsWith('a')).toBe(false);
  });
});
describe('isDynamic', function () {
  it('should detect paths with symbols', function () {
    var templateImport = new ImportWrapper();
    templateImport.addLiteral('a');
    expect(templateImport.isDynamic()).toBe(false);
    templateImport.addSymbol('b');
    expect(templateImport.isDynamic()).toBe(true);
  });
});
describe('toString', function () {
  var templateImport;
  beforeEach(function () {
    templateImport = new ImportWrapper();
    templateImport.addSymbol('a').addLiteral('b');
  });
  it('should return import string', function () {
    expect(templateImport.toString()).toBe('a + "b"');
  });
  it('should return raw string', function () {
    expect(templateImport.toGlob()).toBe('*b');
  });
  it('should return unquoted string for static paths', function () {
    templateImport.shift();
    expect(templateImport.toString()).toBe('b');
  });
  it('should return quoted string for multiple literals', function () {
    templateImport.shift();
    templateImport.addLiteral('c');
    expect(templateImport.toString()).toBe('"b" + "c"');
  });
});
describe('toArgs', function () {
  it('should return all symbol names', function () {
    var templateImport = new ImportWrapper();
    templateImport.addLiteral('a').addLiteral('b');
    expect(templateImport.toArgs()).toEqual([]);
    templateImport.addSymbol('c');
    expect(templateImport.toArgs()).toEqual(['c']);
  });
});
describe('toRegExp', function () {
  it('should generate RegExp for path', function () {
    var templateImport = new ImportWrapper();
    templateImport.addLiteral('a/').addSymbol('b').addLiteral('/c/');
    expect(templateImport.toRegExp().test('a/foobar/c/')).toBe(true);
  });
});