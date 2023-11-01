import runtime from './runtime.js';
describe('render', function () {
  test('should render template', function () {
    var contextSpy = jest.fn();
    var precompiled = {
      root: function root(env, context, frame, runtime, cb) {
        contextSpy(context.ctx);
        cb(null, 'Foo');
      }
    };
    var tpl = runtime({}, {
      templates: {
        'foo.njk': precompiled
      }
    });
    expect(tpl.render('foo.njk', {
      username: 'Joe Doe'
    })).toBe('Foo');
    expect(contextSpy).toHaveBeenCalledWith(expect.objectContaining({
      username: 'Joe Doe'
    }));
  });
});
describe('isAsync', function () {
  test('should return true with async filters', function () {
    var tpl = runtime({}, {
      filters: {
        foo: {
          async: true,
          module: ''
        }
      }
    });
    expect(tpl.isAsync()).toBe(true);
  });
});