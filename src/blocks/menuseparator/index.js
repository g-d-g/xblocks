import './index.styl';
import './index.jsx';
import { xb } from 'context';
import xcore from 'xblocks-core';

/**
 * xb-menuseparator html element
 *
 * @class xb.Menuseparator
 * @memberof xb
 * @augments HTMLElement
 */
export default xb.Menuseparator = xcore.create('xb-menuseparator', [
    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);