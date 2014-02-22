/** @jsx React.DOM */
define([
    "react"
], function(
    React
) {
    var Password = React.createClass({
        getInitialState: function() {
            return {
                password: ""
            };
        },

        componentWillMount: function() {
            this.refreshPassword();
        },

        render: function() {
            /*jshint ignore:start*/
            return (
                <div className="password">
                    {this.state.password}
                </div>
            );
            /*jshint ignore:end*/
        },

        refreshPassword: function() {
            this.setState({
                password: this._generatePassword()
            });
        },

        _generatePassword: function() {
            var numbers = "0123456789";
            var lowercase = "abcdefghijklmnopqrstuvwxyz";
            var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var symbols = "!\"§$%&/()=?-_#+*<>;.,";

            var inputSet = "";
            var password = "";

            if (!!this.props.numbers) {
                inputSet += numbers;
            }

            if (!!this.props.lowercase) {
                inputSet += lowercase;
            }

            if (!!this.props.uppercase) {
                inputSet += uppercase;
            }

            if (!!this.props.symbols) {
                inputSet += symbols;
            }

            if (inputSet.length === 0) {
                return "No input character set selected";
            }

            inputSet = inputSet.split("");

            while(password.length < this.props.length) {
                password += inputSet[
                    Math.floor(
                        Math.random() * inputSet.length
                    )
                ];
            }

            return password;
        }
    });

    return Password;
});
