/* global global, xblocks, __noop, XBMenuElementCommon */
/* jshint strict: false */

/**
* Checked in:
* ChromeCanary 40
* FireFox Developer Edition 35
*/

/*! borschik:include:menu-inline.jsx.js */

var XBMenuInlineElementStatic = {
    _init: function() {
        if (this._xbfocus) {
            this._xbfocus.destroy();
        }

        this._xbfocus = new xblocks.utils.Table(this, {
            'col': 'xb-menu-inline:not([disabled])',
            'rowLoop': true,
            'colLoop': true
        });
    }
};

/* jshint -W098 */
var XBMenuInlineElement = xblocks.create('xb-menu-inline', [
    xblocks.mixin.eFocus,
    XBMenuElementCommon,

    {
        'prototype': Object.create(HTMLElement.prototype),

        'events': {
            'xb-created': XBMenuInlineElementStatic._init,

            'xb-repaint': XBMenuInlineElementStatic._init,

            'blur': function() {
                if (!this.hasOpenSubmenu) {
                    this._xbfocus.blurItem();
                }
            }
        },

        'methods': {
            'open': __noop,

            'close': function() {
                // FireFox does not fire a blur event
                global.setImmediate(this.focus.bind(this));
            }
        }
    }
]);
