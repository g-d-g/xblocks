import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import classnames from 'classnames';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-speech-recognition
 *
 * @class xv.SpeechRecognition
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 */
export default xv.SpeechRecognition = view.register('xb-speech-recognition', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-speech-recognition',

        propTypes: {
            active: PropTypes.bool
        },

        getDefaultProps: function () {
            return {
                active:   false,
                disabled: false
            };
        },

        render: function () {
            const classes = classnames({
                'xb-speech-recognition': true,
                '_active': this.props.active,
                '_disabled': this.props.disabled
            });

            const props = {
                'class': classes,
                'type': this.props.active ? 'mic-on' : 'mic-off'
            };

            return (
                <xb-ico {...props} />
            );
        }
    }
]);
