/* global xblocks */
/* jshint strict: false */

xblocks.utils.filterPropsPrefixLink = function(name) {
    return xblocks.utils.REG_PROPS_PREFIX_LINK.test(name);
};