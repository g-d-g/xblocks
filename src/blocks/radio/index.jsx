import { xv } from 'context';
import { PropTypes } from 'react';
import xcore from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import resetLastRadioChecked from 'utils/resetLastRadioChecked';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-radio
 *
 * @class xv.Radio
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
export default xv.Radio = xcore.view.register('xb-radio', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-radio',

        mixins: [ PureRenderMixin ],

        // @if NODE_ENV='development'
        propTypes: {
            'autofocus':    PropTypes.bool,
            'checked':      PropTypes.bool,
            'for':          PropTypes.string,
            'form':         PropTypes.string,
            'name':         PropTypes.string,
            'required':     PropTypes.bool,
            'size':         PropTypes.oneOf([ 'm', 'l' ]),
            'value':        PropTypes.string
        },
        // @endif

        getDefaultProps: function () {
            return {
                'autofocus':    false,
                'checked':      false,
                'children':     '',
                'disabled':     false,
                'required':     false,
                'size':         'm',
                'tabindex':     '0',
                'value':        'on'
            };
        },

        getInitialState: function () {
            return {
                'checked': this.props.checked
            };
        },

        componentWillReceiveProps: function (nextProps) {
            this.setState({
                'checked': Boolean(nextProps.checked)
            });
        },

        componentWillUpdate: function (nextProps, nextState) {
            if (nextState.checked) {
                resetLastRadioChecked(this.container(), nextProps.name);
            }
        },

        componentWillMount: function () {
            if (this.state.checked) {
                resetLastRadioChecked(this.container(), this.props.name);
            }
        },

        _onChange: function (event) {
            this.container().checked = event.target.checked;
        },

        render: function () {
            var classes = {
                'xb-radio':  true,
                '_disabled': this.props.disabled,
                [ `_size-${this.props.size}` ]: true
            };

            classes = classnames(classes);

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            return (
                <label className={classes}
                    title={this.props.title}
                    htmlFor={this.props['for']}>

                    <input
                        autoFocus={this.props.autofocus}
                        checked={this.state.checked}
                        className="_controller"
                        defaultChecked={this.props.checked}
                        disabled={this.props.disabled}
                        form={this.props.form}
                        name={this.props.name}
                        onChange={this._onChange}
                        readOnly={true}
                        required={this.props.required}
                        tabIndex={tabIndex}
                        type="radio"
                        value={this.props.value} />

                    <span className="_view">
                        <span className="_icon">{String.fromCharCode(160)}</span>
                    </span>
                    <span className="_label" data-xb-content={this.props._uid}>
                        {this.props.children}
                    </span>
                </label>
            );
        }
    }
]);