// @if NODE_ENV='development'
import { PropTypes } from 'react';
// @endif

/**
 * Common attributes
 *
 * @memberOf xblocks.mixin
 * @type {object}
 * @prop {object} propTypes
 * @prop {string} propTypes.accesskey
 * @prop {string} propTypes.contextmenu
 * @prop {enum} propTypes.dir
 * @prop {boolean} propTypes.hidden
 * @prop {boolean} propTypes.spellcheck
 * @prop {string} propTypes.tabindex
 * @prop {string} propTypes.title
 */
export default {
    // @if NODE_ENV='development'
    propTypes: {
        'accesskey':    PropTypes.string,
        'contextmenu':  PropTypes.string,
        'dir':          PropTypes.oneOf([ 'ltr', 'rtl' ]),
        'disabled':     PropTypes.bool,
        'hidden':       PropTypes.bool,
        'spellcheck':   PropTypes.bool,
        'tabindex':     PropTypes.string,
        'title':        PropTypes.string
    }
    // @endif
};