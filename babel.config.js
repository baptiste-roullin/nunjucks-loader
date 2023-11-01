
export default function (api) {
    api.cache(true)
    return {

        plugins: ['@babel/plugin-syntax-import-attributes'],
        presets: [
            ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: '3',
                modules: false,
            }]
        ]
    }
}
