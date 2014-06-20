/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

/*! borschik:include:button-content.jsx.js */

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
                <a className={classes}
                    href={this.props.href}
                    name={this.props.name}
                    target={this.props.target}
                    title={this.props.title}
                    tabIndex={tabIndex}>

                    <XBButtonContent _uid={this.props._uid} ico={icoProps}>{this.props.children}</XBButtonContent>
                </a>
            );

        } else if (this.props.type === 'file') {
            return (
                <label className={classes}
                    tabIndex={tabIndex}>

                    <span className="_file-intruder">
                        <span className="_file-intruder-inner">
                            <input className="_file-intruder-input"
                                type="file"
                                name={this.props.name}
                                title={this.props.title}
                                disabled={this.props.disabled ? 'disabled' : undefined}
                                multiple={this.props.multiple ? 'multiple' : undefined}
                                autoFocus={this.props.autofocus} />

                            <span className="_file-intruder-focus" />
                        </span>
                    </span>
                    <XBButtonContent _uid={this.props._uid} ico={icoProps}>{this.props.children}</XBButtonContent>
                </label>
            );

        } else if (this.props.type === 'label') {
            return (
                <label className={classes}
                    form={this.props.form}
                    htmlFor={this.props['for']}
                    title={this.props.title}
                    tabIndex={tabIndex}>

                    <XBButtonContent _uid={this.props._uid} ico={icoProps}>{this.props.children}</XBButtonContent>
                </label>
            );

        } else if (this.props.type === 'inline') {
            return (
                <span className={classes}
                    tabIndex={tabIndex}>

                    <XBButtonContent _uid={this.props._uid} ico={icoProps}>{this.props.children}</XBButtonContent>
                </span>
            );

        } else {
            return (
                <button className={classes}
                    type={this.props.type}
                    form={this.props.form}
                    title={this.props.title}
                    name={this.props.name}
                    value={this.props.value}
                    tabIndex={tabIndex}
                    disabled={this.props.disabled ? 'disabled' : undefined}
                    autoFocus={this.props.autofocus}>

                    <XBButtonContent _uid={this.props._uid} ico={icoProps}>{this.props.children}</XBButtonContent>
                </button>
            );
        }
    }
});