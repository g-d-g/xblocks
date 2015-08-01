//jscs:disable
/* global xblocks, xb */
/* jshint strict: false */
//jscs:enable

/*! borschik:include:link.jsx.js */

/**
 * xb-link html element
 *
 * @class xb.Link
 * @memberof xb
 * @augments HTMLElement
 * @mixes xblocks.mixin.eDisabled
 */
xb.Link = xblocks.create('xb-link', [
    xblocks.mixin.eDisabled
]);
