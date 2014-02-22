/** @jsx React.DOM */
define([
    "react",
    "jquery",
    "nouislider"
], function(
    React,
    jQuery
) {
    var Slider = React.createClass({
        render: function() {
            /*jshint ignore:start*/
            return (
                <div>
                    <div className="password-length-slider" ref="slider"></div>
                    <input type="number"
                           className="form-control"
                           id={this.props.id}
                           ref="input" />
                </div>
            );
            /*jshint ignore:end*/
        },

        getInitialState: function() {
            return {
                value: this.props.defaultValue
            };
        },

        componentDidMount: function() {
            var $slider = jQuery(this.refs.slider.getDOMNode());
            var $input = jQuery(this.refs.input.getDOMNode());

            $slider.noUiSlider({
                range: [this.props.rangeStart, this.props.rangeEnd],
                start: this.props.defaultValue,
                handles: 1,
                connect: "lower",
                behaviour: "drag-tap",
                step: 1,
                serialization: {
                    to: $input,
                    resolution: 1
                },
                set: jQuery.proxy(function() {
                    this.setState({
                        value: jQuery(this.refs.slider.getDOMNode()).val()
                    });
                }, this)
            });
        }
    });

    return Slider;
});
