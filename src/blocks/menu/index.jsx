import { xv } from 'context';
import { PropTypes } from 'react';
import xcore from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';
import mixinViewMenu from 'mixin/view/menu';

/**
 * The template node xb-menu
 *
 * @class xv.Menu
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes xblocks.mixin.vMenu
 * @mixes React.addons.PureRenderMixin
 */
export default xv.Menu = xcore.view.register('xb-menu', [
    mixinViewCommonAttrs,
    mixinViewMenu,

    {
        displayName: 'xb-menu',

        mixins: [ PureRenderMixin ],

        // @if NODE_ENV='development'
        propTypes: {
            size: PropTypes.string
        },
        // @endif

        getDefaultProps: function () {
            return {
                size: ''
            };
        },

        afterOpen: function (callback) {
            this._updateMaxHeight(this.props.size, callback);
        }
    }
]);