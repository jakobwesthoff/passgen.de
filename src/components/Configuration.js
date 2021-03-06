/** @jsx React.DOM */
define([
    "react",
    "jsx!components/Slider",
    "jquery",
    "bootstrap"
], function(
    React,
    Slider,
    jQuery
) {
    var Configuration = React.createClass({
        componentDidMount: function() {
            jQuery(this.refs.configurationModal.getDOMNode()).modal({
                backdrop: "static",
                keyboard: true,
                show: false
            });
        },

        render: function() {
            /*jshint ignore:start*/
            return (
                <div className="configuration">
                    <i className="fa fa-cog fa-4x" onClick={this.handleModalOpen}></i>

                    <div className="modal fade" ref="configurationModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button onClick={this.handleDismiss} type="button" className="close" aria-hidden="true">&times;</button>
                                    <h4 className="modal-title">Configuration</h4>
                                </div>
                                <div className="modal-body">
                                    <form role="form" onSubmit={this.handleSubmit}>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" ref="numbers" defaultChecked={!!this.props.configuration.numbers} /> Numbers
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" ref="lowercase" defaultChecked={!!this.props.configuration.lowercase} /> Lowercase Characters (abc...)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" ref="uppercase" defaultChecked={!!this.props.configuration.uppercase} /> Uppercase Characters (ABC...)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" ref="symbols" defaultChecked={!!this.props.configuration.symbols} /> Symbols (!%$...)
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="passwordLength">Length</label>
                                            <Slider ref="length" id="passwordLength" rangeStart="1" rangeEnd="64" defaultValue={this.props.configuration.length} />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" onClick={this.handleDismiss}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            /*jshint ignore:end*/
        },

        handleSubmit: function(e) {
            e.preventDefault();
            var newConfiguration = this._getActiveConfiguration();
            jQuery(this.refs.configurationModal.getDOMNode())
                .modal("hide")
                .one("hidden.bs.modal", jQuery.proxy(function() {
                    if (!!this.props.onOk) {
                        this.props.onOk(newConfiguration);
                    }
                }, this));
        },

        handleModalOpen: function(e) {
            jQuery(this.refs.configurationModal.getDOMNode()).modal("show");
        },

        handleDismiss: function(e) {
            jQuery(this.refs.configurationModal.getDOMNode())
                .modal("hide")
                .one("hidden.bs.modal", jQuery.proxy(function() {
                    if (!!this.props.onDismiss) {
                        this.props.onDismiss();
                    }
                }, this));
        },

        _getActiveConfiguration: function() {
            return {
                lowercase: this.refs.lowercase.state.checked,
                uppercase: this.refs.uppercase.state.checked,
                numbers: this.refs.numbers.state.checked,
                symbols: this.refs.symbols.state.checked,
                length: this.refs.length.state.value
            };
        }
    });

    return Configuration;
});
