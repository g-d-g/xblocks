//jscs:disable
/* global xblocks */
/* jshint strict: false */
//jscs:enable

xblocks.utils.filterLinkProps = function(props) {
    return xblocks.utils.mapObject(
        xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixLink),
        xblocks.utils.mapPropsPrefixLink
    );
};
