/* global xblocks */
/* jshint strict: false */

xblocks.utils.exportPropTypes = function(tagName) {
    var props = xblocks.utils.propTypes(tagName);
    var exportProps = {};
    var prefix = tagName + '-';
    var p;

    for (p in props) {
        if (props.hasOwnProperty(p) && p[ 0 ] !== '_') {
            exportProps[ prefix + p ] = props[ p ];
        }
    }

    return {
        'propTypes': exportProps
    };
};