import { xv } from 'context';
import xblocks from 'xblocks';

/**
 * The template node xb-menuseparator
 *
 * @class xv.Menuseparator
 * @memberof xv
 */
export default xv.Menuseparator = xblocks.view.register('xb-menuseparator', {
    displayName: 'xb-menuseparator',

    render: function () {
        return (
            <div className="xb-menuseparator"></div>
        );
    }
});
