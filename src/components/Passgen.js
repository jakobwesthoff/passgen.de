/** @jsx React.DOM */
define([
    "react",
    "jsx!components/PageCenter",
    "jsx!components/Password",
    "jsx!components/Configuration",
], function(
    React,
    PageCenter,
    Password,
    Configuration
) {
    var Passgen = React.createClass({
        getInitialState: function() {
            return {
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: false,
                length: 32
            };
        },

        render: function() {
            /*jshint ignore:start*/
            return (
                <PageCenter>
                    <h1>Your new password:</h1>
                    <div className="box">
                        <Password ref="password"
                                  lowercase={this.state.lowercase}
                                  uppercase={this.state.uppercase}
                                  numbers={this.state.numbers}
                                  symbols={this.state.symbols}
                                  length={this.state.length} />
                    </div>
                    <div className="configlink">
                        <Configuration configuration={this.state}
                                       onOk={this.handleConfiguration}>
                            Configure password creation
                        </Configuration>
                    </div>
                </PageCenter>
            );
            /*jshint ignore:end*/
        },

        handleConfiguration: function(configuration) {
            var passwordRef = this.refs.password;
            this.setState(configuration, function() {
                passwordRef.refreshPassword();
            });
        }
    });

    return Passgen;
});
