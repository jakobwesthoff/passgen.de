/* global require */
require.config({
    "basePath": './',

    "paths": {
        "JSXTransformer": "../vendor/require-jsx/JSXTransformer",
        "jsx": "../vendor/require-jsx/jsx",
        "react": "../bower_components/react/react",
        "jquery": "../bower_components/jquery/dist/jquery",
        "bootstrap": "../vendor/bootstrap/bootstrap"
    },
    "shim": {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
});
