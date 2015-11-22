import { xv } from 'context';
import { PropTypes } from 'react';
import xblocks from 'xblocks';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-link
 *
 * @class xv.Link
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Link = xblocks.view.register('xb-link', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-link',

        mixins: [ PureRenderMixin ],

        // @if NODE_ENV='development'
        propTypes: {
            'href':     PropTypes.string,
            'name':     PropTypes.string,
            'target':   PropTypes.oneOf([ '_self', '_blank', '_parent', '_top' ]),
            'theme':    PropTypes.oneOf([ 'normal', 'outer', 'pseudo', 'empty' ])
        },
        // @endif

        getDefaultProps: function () {
            return {
                'disabled': false,
                'tabindex': '1',
                'target':   '_self',
                'theme':    'normal'
            };
        },

        render: function () {
            var classes = {
                'xb-link':   true,
                '_disabled': this.props.disabled
            };

            if (this.props.theme) {
                classes[ '_theme-' + this.props.theme ] = true;
            }

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            classes = classnames(classes);

            var content = this.props.value || this.props.children;

            return (
                <a name={this.props.name}
                    href={this.props.href}
                    target={this.props.target}
                    tabIndex={tabIndex}
                    className={classes}
                    data-xb-content={this.props._uid}>

                    {content}
                </a>
            );
        }
    }
]);

export default xv.Link;
