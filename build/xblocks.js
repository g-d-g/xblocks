(function(global, undefined) {
    'use strict';

    var React = global.React;
    var xblocks = global.xblocks;

    xblocks.dom.attrs.ARRTS_BOOLEAN = xblocks.dom.attrs.ARRTS_BOOLEAN.concat([
        'multiline',
        'autosize',
        'reset'
    ]);

    xblocks.utils.compact = function(data) {
        for (var prop in data) {
            if (data.hasOwnProperty(prop)) {
                if (!data[prop]) {
                    delete data[prop];
                }
            }
        }

        return data;
    };

    xblocks.utils.toAttrsName = function(name) {
        switch (name) {
            case 'class':
                return 'className';
            case 'tabindex':
                return 'tabIndex';
            case 'autofocus':
                return 'autoFocus';
            default:
                return name;
        }
    };

    xblocks.utils.normalizeAttrsName = function(data) {
        var attrs = {};
        Object.keys(data).forEach(function(key) {
            attrs[xblocks.utils.toAttrsName(key)] = data[key];
        });
        return attrs;
    };

    /* blocks/ico/ico.js begin */
/* global xblocks, global, React */
/* jshint strict: false */

/* blocks/ico/ico.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

xblocks.view.register('xb-ico', {
    displayName: 'xb-ico',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'alt': React.PropTypes.string,
        'value': React.PropTypes.string,
        'children': React.PropTypes.renderable,
        'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
        'type': React.PropTypes.oneOf([
            'attention',
            'close',
            'check',
            'download',
            'download-white',
            'dropdown',
            'eye',
            'link',
            'link-white',
            'mail',
            'notification',
            'odnoklassniki',
            'pause',
            'people',
            'play',
            'print',
            'remove',
            'services',
            'settings',
            'three-dots',
            'trash',
            'trash-white',
            'twitter',
            'help',
            'upload',
            'upload-white',
            'vk'
        ]).isRequired,
        'active': React.PropTypes.bool,
        'disabled': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 's',
            'children': String.fromCharCode(160)
        };
    },

    render: function() {
        var classes = {
            'xb-ico': true,
            '_active': this.props.active,
            '_disabled': this.props.disabled
        };

        if (this.props.type) {
            classes['_type-' + this.props.type] = true;
        }

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        classes = React.addons.classSet(classes);

        var content = this.props.value || this.props.children;

        return (
            React.DOM.span( {className:classes, 'data-xb-content':this.props._uid}, content)
        );
    }
});

/* blocks/ico/ico.jsx.js end */


xblocks.create('xb-ico');

/* blocks/ico/ico.js end */

    /* blocks/link/link.js begin */
/* global xblocks, global, React */
/* jshint strict: false */

/* blocks/link/link.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

xblocks.view.register('xb-link', {
    displayName: 'xb-link',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'href': React.PropTypes.string,
        'name': React.PropTypes.string,
        'target': React.PropTypes.oneOf([ '_self', '_blank', '_parent', '_top' ]),
        'theme': React.PropTypes.oneOf([ 'normal', 'outer', 'pseudo', 'input' ])
    },

    getDefaultProps: function() {
        return {
            'theme': 'normal'
        };
    },

    render: function() {
        var classes = {
            'xb-link': true,
            '_disabled': this.props.disabled
        };

        if (this.props.theme) {
            classes['_theme-' + this.props.theme] = true;
        }

        classes = React.addons.classSet(classes);

        var content = this.props.value || this.props.children;

        return (
            React.DOM.a( {id:this.props.id,
                name:this.props.name,
                href:this.props.href,
                target:this.props.target,
                className:classes,
                'data-xb-content':this.props._uid}, content)
        );
    }
});

/* blocks/link/link.jsx.js end */


xblocks.create('xb-link');

/* blocks/link/link.js end */

    /* blocks/button/button.js begin */
/* global xblocks */
/* jshint strict: false */

/* blocks/button/button.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

/* blocks/button/button-content.jsx.js begin */
/** @jsx React.DOM */
/* jshint strict: false */

var XBButtonContent = xblocks.view.create({
    displayName: 'XBButtonContent',

    propTypes: {
        'ico': React.PropTypes.object
    },

    statics: {
        mapIcoProps: function(props) {
            var regIcoProp = /^xb-ico-/;
            return xblocks.utils.mapObject(props, function(name, descr) {
                return {
                    'name': name.replace(regIcoProp, ''),
                    'descr': descr
                };
            });
        }
    },

    getDefaultProps: function() {
        return {
            'ico': {}
        };
    },

    shouldComponentUpdate: function(nextProps) {
        return !xblocks.utils.equals(nextProps, this.props);
    },

    render: function() {
        var icoProps = XBButtonContent.mapIcoProps(this.props.ico);
        var children = [
            React.DOM.span( {className:"_content-content",
                key:"content",
                'data-xb-content':this.props._uid}, this.props.children)
        ];

        if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
            icoProps.key = 'ico';
            var icoView = xblocks.view.get('xb-ico')(icoProps);

            if (!icoProps.float || icoProps.float === 'left') {
                children.unshift(icoView);

            } else if (icoProps.float === 'right') {
                children.push(icoView);
            }
        }

        return (
            React.DOM.span( {className:"_content"}, children)
        );
    }
});

/* blocks/button/button-content.jsx.js end */


var XBButton = xblocks.view.register('xb-button', {
    displayName: 'xb-button',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'children': React.PropTypes.renderable,
        'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
        'theme': React.PropTypes.oneOf([
            'normal',
            'action',
            'dark',
            'flying',
            'pseudo-inverted',
            'pseudo',
            'promo'
        ]),
        'checked': React.PropTypes.bool,

        'type': React.PropTypes.oneOf([ 'button', 'file', 'submit', 'label', 'inline', 'link' ]),
        'target': React.PropTypes.oneOf([ '_blank', '_self', '_parent', '_top' ]),
        'value': React.PropTypes.string,
        'href': React.PropTypes.string,
        'name': React.PropTypes.string,
        'title': React.PropTypes.string,
        'form': React.PropTypes.string,
        'for': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'multiple': React.PropTypes.bool,
        'autofocus': React.PropTypes.bool,
        'disabled': React.PropTypes.bool
    },

    statics: {
        filterIcoProps: function(props) {
            var regIcoProp = /^xb-ico-/;
            return xblocks.utils.filterObject(props, function(name) {
                return regIcoProp.test(name);
            });
        }
    },

    getDefaultProps: function() {
        return {
            'size': 'm',
            'theme': 'normal',
            'type': 'button',
            'children': String.fromCharCode(160)
        };
    },

    render: function() {
        var classes = {
            'xb-button': true,
            '_disabled': this.props.disabled,
            '_checked': this.props.checked
        };

        if (this.props.theme) {
            classes['_theme-' + this.props.theme] = true;
        }

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        classes = React.addons.classSet(classes);

        var icoProps = XBButton.filterIcoProps(this.props);
        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        if (this.props.type === 'link') {
            return (
                React.DOM.a( {className:classes,
                    href:this.props.href,
                    name:this.props.name,
                    target:this.props.target,
                    title:this.props.title,
                    tabIndex:tabIndex}, 

                    XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                )
            );

        } else if (this.props.type === 'file') {
            return (
                React.DOM.label( {className:classes,
                    tabIndex:tabIndex}, 

                    React.DOM.span( {className:"_file-intruder"}, 
                        React.DOM.span( {className:"_file-intruder-inner"}, 
                            React.DOM.input( {className:"_file-intruder-input",
                                type:"file",
                                name:this.props.name,
                                title:this.props.title,
                                disabled:this.props.disabled ? 'disabled' : undefined,
                                multiple:this.props.multiple ? 'multiple' : undefined,
                                autoFocus:this.props.autofocus} ),

                            React.DOM.span( {className:"_file-intruder-focus"} )
                        )
                    ),
                    XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                )
            );

        } else if (this.props.type === 'label') {
            return (
                React.DOM.label( {className:classes,
                    form:this.props.form,
                    htmlFor:this.props['for'],
                    title:this.props.title,
                    tabIndex:tabIndex}, 

                    XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                )
            );

        } else if (this.props.type === 'inline') {
            return (
                React.DOM.span( {className:classes,
                    tabIndex:tabIndex}, 

                    XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                )
            );

        } else {
            return (
                React.DOM.button( {className:classes,
                    type:this.props.type,
                    form:this.props.form,
                    title:this.props.title,
                    name:this.props.name,
                    value:this.props.value,
                    tabIndex:tabIndex,
                    disabled:this.props.disabled ? 'disabled' : undefined,
                    autoFocus:this.props.autofocus}, 

                    XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                )
            );
        }
    }
});

/* blocks/button/button.jsx.js end */


xblocks.create('xb-button', {
    prototype: Object.create(HTMLButtonElement.prototype),

    accessors: {
        disabled: {
            get: function() {
                return Boolean(xblocks.dom.attrs.getRealValue('disabled', this.getAttribute('disabled')));
            },
            set: function(isDisabled) {
                if (isDisabled) {
                    this.setAttribute('disabled', '');
                } else {
                    this.removeAttribute('disabled');
                }
            }
        }
    },

    methods: {
        focus: function() {
            this.firstChild.focus();
        },

        blur: function() {
            this.firstChild.blur();
        }
    }
});

/* blocks/button/button.js end */

    /* blocks/input/input.js begin */
/* global xblocks */
/* jshint strict: false */

/* blocks/input/input.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, XBInputController */
/* jshint strict: false */

/* blocks/input/input-controller.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */

var XBInputController = xblocks.view.create({
    displayName: 'XBInputController',

    propTypes: {
        'class': React.PropTypes.string,
        'name': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'multiline': React.PropTypes.bool,
        'required': React.PropTypes.bool,
        'readonly': React.PropTypes.bool,
        'autofocus': React.PropTypes.bool,
        'rows': React.PropTypes.string,
        'cols': React.PropTypes.string,
        'placeholder': React.PropTypes.string,
        'value': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ])
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return !xblocks.utils.equals(nextProps, this.props) ||
            !xblocks.utils.equals(nextState, this.state);
    },

    getInitialState: function() {
        return {
            'value': this.props.value
        };
    },

    getDefaultProps: function() {
        return {
            'value': ''
        };
    },

    _onchange: function(event) {
        this.setState({ 'value': event.target.value });
    },

    render: function() {
        var tabIndex = this.props.tabindex;
        if (this.props.disabled && tabIndex) {
            tabIndex = '-1';
        }

        if (this.props.multiline) {
            return (
                React.DOM.textarea( {value:this.state.value,
                className:this.props['class'],
                name:this.props.name,
                disabled:this.props.disabled,
                required:this.props.required,
                readonly:this.props.readonly,
                autoFocus:this.props.autofocus,
                rows:this.props.rows,
                cols:this.props.cols,
                placeholder:this.props.placeholder,
                tabIndex:tabIndex,
                autocomplete:this.props.autocomplete,
                onChange:this._onchange})
            );

        } else {
            return (
                React.DOM.input( {value:this.state.value,
                type:"text",
                className:this.props['class'],
                name:this.props.name,
                disabled:this.props.disabled,
                required:this.props.required,
                readonly:this.props.readonly,
                autoFocus:this.props.autofocus,
                placeholder:this.props.placeholder,
                tabIndex:tabIndex,
                autocomplete:this.props.autocomplete,
                onChange:this._onchange})
            );
        }
    }
});

/* blocks/input/input-controller.jsx.js end */


// TODO "list" attribute
// TODO "pattern" attribute

xblocks.view.register('xb-input', {
    displayName: 'xb-input',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'name': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'autosize': React.PropTypes.bool,
        'multiline': React.PropTypes.bool,
        'required': React.PropTypes.bool,
        'readonly': React.PropTypes.bool,
        'reset': React.PropTypes.bool,
        'autofocus': React.PropTypes.bool,
        'type': React.PropTypes.oneOf([
            'text', 'number', 'date', 'datetime', 'email', 'month',
            'range', 'search', 'tel', 'time', 'url', 'week', 'color'
        ]),
        'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
        'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),
        'rows': React.PropTypes.string,
        'cols': React.PropTypes.string,
        'placeholder': React.PropTypes.string,
        'value': React.PropTypes.string,
        'prefix': React.PropTypes.string,
        'postfix': React.PropTypes.string,
        'tabindex': React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            'value': '',
            'type': 'text',
            'size': 'm'
        };
    },

    _isComplex: function() {
        return (this.props.postfix || this.props.prefix || this.props.reset || this.props.label || this.props.autosize);
    },

    _resetClick: function() {
        this.refs.controller.setState({ 'value': '' });
    },

    render: function() {
        var props = xblocks.utils.merge({}, this.props);
        var isComplex = this._isComplex();
        var classes = {
            'xb-input': true,
            '_disabled': Boolean(props.disabled),
            '_autosize': Boolean(props.autosize)
        };

        if (props.size) {
            classes['_size-' + props.size] = true;
        }

        if (isComplex) {
            classes._complex = true;
        } else {
            classes._simple = true;
        }

        classes = React.addons.classSet(classes);



        if (isComplex) {
            var children = [];

            if (props.label) {
                children.push(xblocks.view.get('xb-link')({
                    'type': 'input',
                    'key': 'label'
                }));
            }

            if (props.prefix) {
                children.push(
                    React.DOM.span({ key: 'prefix', className: '_left' }, props.prefix)
                );
            }

            if (props.postfix) {
                children.push(
                    React.DOM.span({ key: 'postfix', className: '_right' }, props.postfix)
                );
            }

            if (props.reset) {
                children.push(
                    React.DOM.span({
                        key: 'reset',
                        className: '_reset',
                        onClick: this._resetClick
                    })
                );
            }

            var controllerProps = xblocks.utils.merge({}, props);
            controllerProps['class'] = '_controller';
            /* jshint -W069 */
            controllerProps['key'] = 'controller';
            controllerProps['ref'] = 'controller';

            children.push(
                React.DOM.span({
                    'key': 'content',
                    'className': '_content'
                }, [
                    XBInputController(controllerProps),
                    React.DOM.span({ 'key': 'view', 'className': '_view' })
                ])
            );

            return (
                React.DOM.label({ className: classes }, children)
            );

        } else {
            props['class'] = classes;
            props['ref'] = 'controller';

            return (
                XBInputController(props)
            );
        }
    }
});

/* blocks/input/input.jsx.js end */


xblocks.create('xb-input');

/* blocks/input/input.js end */


}(function() {
    return this || (1, eval)('this');
}()));