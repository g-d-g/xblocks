/** @jsx React.DOM */
/* global xblocks, React, XBInputController */
/* jshint strict: false */

/*! borschik:include:input-controller.jsx.js */

// TODO "list" attribute
// TODO "pattern" attribute
// TODO "title"attribute

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
        'ghost': React.PropTypes.bool,
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

    shouldComponentUpdate: function(nextProps, nextState) {
        return (
            !xblocks.utils.equals(nextProps, this.props) ||
            !xblocks.utils.equals(nextState, this.state)
        );
    },

    getDefaultProps: function() {
        return {
            'value': '',
            'type': 'text',
            'size': 'm',
            'rows': '4'
        };
    },

    getInitialState: function() {
        return {
            'value': this.props.value
        };
    },

    componentDidMount: function() {
        // check show or hide placeholder after mount element
        this.refs.controller._dispatchEventToggleHint('', this.props.value);
    },

    /**
     * Remember current value in state
     * @param {Event} event
     * @private
     */
    _onChange: function(event) {
        this.setState({
            'value': event.target.value
        });
    },

    /**
     * Show or hide placeholder
     * @param {boolean} toggle
     * @private
     */
    _onHintToggle: function(toggle) {
        this.refs.placeholder.getDOMNode().style.visibility = (toggle ? 'inherit' : 'hidden');
    },

    /**
     * Check show complex input
     * @returns {boolean}
     * @private
     */
    _isComplex: function() {
        return (
            this.props.postfix ||
            this.props.prefix ||
            this.props.reset ||
            this.props.label ||
            this.props.autosize
        );
    },

    /**
     * Click reset button
     * @private
     */
    _onClickReset: function() {
        this.setState({
            'value': ''
        });
    },

    render: function() {
        var isComplex = this._isComplex();
        var classes = {
            'xb-input': true,
            '_disabled': Boolean(this.props.disabled),
            '_autosize': Boolean(this.props.autosize),
            '_ghost': Boolean(this.props.ghost)
        };

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        if (isComplex) {
            classes._complex = true;
        } else {
            classes._simple = true;
        }

        classes = React.addons.classSet(classes);

        var isPlaceholderHint = false;


        if (isComplex) {
            var children = [];

            if (this.props.placeholder) {
                isPlaceholderHint = true;

                children.push(
                    <span ref="placeholder" key="placeholder" className="_hint">
                        <span className="_hint-inner">{this.props.placeholder}</span>
                    </span>
                );
            }

            if (this.props.label) {
                children.push(xblocks.view.get('xb-link')({
                    'type': 'input',
                    'key': 'label'
                }));
            }

            if (this.props.prefix) {
                children.push(
                    <span key="prefix" className="_left">{this.props.prefix}</span>
                );
            }

            if (this.props.postfix) {
                children.push(
                    <span key="postfix" className="_right">{this.props.postfix}</span>
                );
            }

            if (this.props.reset) {
                children.push(
                    <span key="reset" className="_reset" onClick={this._onClickReset}></span>
                );
            }

            children.push(
                <span key="content" className="_content">
                    <XBInputController key="controller"
                        ref="controller"
                        className="_controller"
                        value={this.state.value}
                        name={this.props.name}
                        disabled={this.props.disabled}
                        required={this.props.required}
                        readOnly={this.props.readonly}
                        multiline={this.props.multiline}
                        autoFocus={this.props.autofocus}
                        rows={this.props.rows}
                        cols={this.props.cols}
                        tabIndex={this.props.tabindex}
                        autocomplete={this.props.autocomplete}
                        autosize={this.props.autosize}
                        onChange={this._onChange}
                        onHintToggle={this._onHintToggle}
                        isPlaceholderHint={isPlaceholderHint}/>
                    <span key="view" className="_view"></span>
                </span>
            );

            return (
                <label className={classes}>{children}</label>
            );

        } else {

           return (
                <XBInputController key="controller"
                    ref="controller"
                    className={classes}
                    value={this.state.value}
                    name={this.props.name}
                    disabled={this.props.disabled}
                    required={this.props.required}
                    readOnly={this.props.readonly}
                    multiline={this.props.multiline}
                    autoFocus={this.props.autofocus}
                    rows={this.props.rows}
                    cols={this.props.cols}
                    placeholder={this.props.placeholder}
                    tabIndex={this.props.tabindex}
                    autocomplete={this.props.autocomplete}
                    autosize={this.props.autosize}
                    onChange={this._onChange}
                    onHintToggle={this._onHintToggle}
                    isPlaceholderHint={isPlaceholderHint}/>
            );
        }
    }
});
