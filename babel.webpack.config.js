module.exports = api => {
    // https://babeljs.io/docs/en/next/config-files#apicache
    api.cache.using(() => process.env.NODE_ENV === 'development');

    const plugins = [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['./'],
                alias: {
                    '@app': './src',
                    '@eng': './eng',
                    '@test': './__tests__',
                },
            },
        ],
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve('@babel/plugin-syntax-dynamic-import'),
        require.resolve('babel-plugin-lodash'),
    ];

    return {
        presets: [
            [
                require.resolve('@babel/preset-env'),
                {
                    targets: { node: 'current' },
                    debug: true,
                },
            ],
            require.resolve('@babel/preset-typescript'),
            [require.resolve('@babel/preset-react'), { development: process.env.NODE_ENV === 'development' }],
        ],
        plugins,
    };
};
