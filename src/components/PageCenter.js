/** @jsx React.DOM */
define([
    "react"
], function(
    React
) {
    var PageCenter = React.createClass({
        render: function() {
            /*jshint ignore:start*/
            return (
                <table>
                    <tr>
                        <td className="wrapper">
                            <div className="wrapper">
                                {this.props.children}
                            </div>
                        </td>
                    </tr>
                </table>
            );
            /*jshint ignore:end*/
        }
    });

    return PageCenter;
});
