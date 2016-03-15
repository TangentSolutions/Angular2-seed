(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>Tangent Angular 2 Seed</h1>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app= {}));
