import { AddonWrapper } from "./AddonWrapper.js";
describe('constructor', function () {
  it('should throw with wrong name', function () {
    expect(function () {
      return new AddonWrapper({});
    }).toThrowErrorMatchingSnapshot();
  });
  it('should throw w/out import path', function () {
    expect(function () {
      return new AddonWrapper({
        name: 'foo'
      });
    }).toThrowErrorMatchingSnapshot();
  });
  it('should throw w/out type', function () {
    expect(function () {
      return new AddonWrapper({
        name: 'foo',
        importPath: 'bar'
      });
    }).toThrowErrorMatchingSnapshot();
  });
  it('should throw with wrong es flag', function () {
    expect(function () {
      return new AddonWrapper({
        name: 'foo',
        importPath: 'bar',
        type: 'x'
      });
    }).toThrowErrorMatchingSnapshot();
  });
});