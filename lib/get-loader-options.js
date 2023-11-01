import schema from './schema.json' assert {type: "json"}
export function getLoaderOptions(loader, callback) {
  var loaderOptions
  try {
    loaderOptions = loader.getOptions(schema)
  } catch (e) {
    callback(e)
    return null
  }
  for (var key in schema.properties) {
    if (!Object.prototype.hasOwnProperty.call(schema.properties, key) || key in loaderOptions) {
      continue
    }
    var schemaProp = schema.properties[key]
    if (!('default' in schemaProp)) {
      continue
    }
    loaderOptions[key] = schemaProp['default']
  }
  return loaderOptions
}