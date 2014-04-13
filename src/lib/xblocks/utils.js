(function(xblocks, Modernizr) {

    xblocks.log = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('[xblocks]');
        //console.log.apply(console, args);
    };

    xblocks.log.time = function(name) {
        name = '[xblocks] ' + name;
        //console.time(name);
        //console.profile();
    };

    xblocks.log.timeEnd = function(name) {
        name = '[xblocks] ' + name;
        //console.profileEnd();
        //console.timeEnd(name);
    };

    xblocks.setZeroTimeout = (function() {
        var timers = [];
        var message = '{ "message": "zero-timeout" }';
        var handleMessage = function(event) {
            if (event.source == window && event.data == message) {
                event.stopPropagation();
                if (timers.length) {
                    timers.shift()();
                }
            }
        };

        if (Modernizr.postmessage) {
            if (window.addEventListener) {
                window.addEventListener('message', handleMessage, true);
            } else if (window.attachEvent) {
                window.attachEvent('onmessage', handleMessage);
            }
        }

        return function(callback) {
            if (Modernizr.postmessage) {
                timers.push(callback);
                window.postMessage(message, '*');
            } else {
                setTimeout(callback, 0);
            }
        };
    }());

    xblocks.getXBParentNode = function(element) {
        if (!element.parentNode) {
            return null;
        }

        if (element.parentNode.hasOwnProperty('xblock')) {
            return element.parentNode;
        }

        return xblocks.getXBParentNode(element.parentNode);
    };

    xblocks.rootElement = function(element) {
        if (Modernizr.createshadowroot) {
            return element.shadowRoot;
        }

        return element;
    };


    xblocks.elementHTML = function(element, html) {
        if (typeof html !== 'undefined') {
            element.innerHTML = html;

            if (!Modernizr.createshadowroot) {
                xblocks.elementUpdate(element);
            }
        }

        var content;
        if (!Modernizr.createshadowroot) {
            content = element.querySelector('content');
        }

        return content && content.innerHTML || element.innerHTML;
    };

    /**
     *
     * @param {Object} obj
     * @param {Array} [ignore]
     * @return {Boolean}
     */
    xblocks.isEmptyObject = function(obj, ignore) {
        if (typeof obj !== 'object') {
            return true;
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!ignore || (ignore && ignore.indexOf(key) === -1)) {
                    return false;
                }
            }
        }

        return true;
    };

}(xblocks, Modernizr));
