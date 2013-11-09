(function(Modernizr) {

    Modernizr.addTest('createshadowroot', function() {
        return !!document.createElement('div').createShadowRoot;
    });

})(Modernizr);


(function(yr) {

    yr.externals['xb-modernizr'] = function(name) {
        return Modernizr[name];
    };

})(yr);

/* borschik:include:../node_modules/borschik/js/borschik.js */
/* borschik:include:../node_modules/x-tag-core/dist/x-tag-core.js */
/* borschik:include:../node_modules/tv4/tv4.js */
/* borschik:include:blocks/blocks.js */
/* borschik:include:blocks/button/button.js */
