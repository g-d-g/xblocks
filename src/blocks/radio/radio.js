/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:radio.jsx.js */

xblocks.create('xb-radio', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLInputElement.prototype)
    }
]);
