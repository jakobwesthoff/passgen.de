/** @jsx React.DOM */
define([
    "react",
    "jsx!components/Passgen"
], function(
    React,
    Passgen
) {
    /*jshint ignore:start*/
    React.renderComponent(
        <Passgen />,
        document.getElementsByTagName("body")[0]
    );
    /*jshint ignore:end*/
});
