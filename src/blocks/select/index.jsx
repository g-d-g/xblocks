import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import classnames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-select
 *
 * @class xv.Select
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 */
export default xv.Select = view.register('xb-select', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-select',

        mixins: [ PureRenderMixin ],

        propTypes: {
            autocapitalize:   PropTypes.oneOf([ 'on', 'off' ]),
            autocomplete:     PropTypes.oneOf([ 'on', 'off' ]),
            autocorrect:      PropTypes.oneOf([ 'on', 'off' ]),
            autofocus:        PropTypes.bool,
            form:             PropTypes.string,
            name:             PropTypes.string,
            required:         PropTypes.bool,
            size:             PropTypes.string,
            theme:            PropTypes.string
        },

        getDefaultProps: function () {
            return {
                autofocus: false,
                disabled:  false,
                required:  false,
                tabindex:  '0'
            };
        },

        getInitialState: function () {
            return {
                focused: false
            };
        },

        _onFocus: function () {
            this.setState({ focused: true });
        },

        _onBlur: function () {
            this.setState({ focused: false });
        },

        render: function () {
            const classes = classnames({
                'xb-select': true,
                '_disabled': this.props.disabled,
                '_focused': this.state.focused
            });

            const tabIndex = this.props.disabled ? '-1' : this.props.tabindex;

            const attrs = {
                'autofocus': this.props.autofocus || undefined,
                'disabled': this.props.disabled || undefined,
                'form': this.props.form,
                'name': this.props.name,
                'required': this.props.required || undefined,
                'tabindex': '-1',
                'theme': this.props.theme,
                'title': this.props.title,
                'type': 'inline',
                'xb-ico-float': 'right',
                'xb-ico-type': 'dropdown'
            };

            return (
                <div className={classes}
                    tabIndex={tabIndex}
                    onBlur={this._onBlur}
                    onFocus={this._onFocus}>

                    <xb-button ref={(ref) => this._contentNode = ref} {...attrs}>
                        Выбранное значение
                    </xb-button>
                </div>
            );
        }
    }
]);
