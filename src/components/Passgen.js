/** @jsx React.DOM */
define([
    "react",
    "jsx!components/PageCenter",
    "jsx!components/Password"
], function(
    React,
    PageCenter,
    Password
) {
    var Passgen = React.createClass({
        render: function() {
            /*jshint ignore:start*/
            return (
                <PageCenter>
                    <h1>Your new password:</h1>
                    <div className="box">
                        <Password lowercase
                                  uppercase
                                  numbers
                                  length={32} />
                    </div>
                </PageCenter>
            );
            /*jshint ignore:end*/
        }
    });

    return Passgen;
});
