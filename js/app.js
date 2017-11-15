/// <reference path="./ractive.d.ts"/>
class TopPage {
    constructor(app) {
        this.app = app;
    }
    onCreate() {
        this.ractive = new Ractive({
            el: '#container',
            template: '#topTemplate',
        });
    }
}
class Application {
    start() {
    }
}
/// <reference path="./ractive.d.ts"/>
/// <reference path="./Page.ts"/>
/// <reference path="./TopPage.ts"/>
/// <reference path="./Application.ts"/>
var app = new Application();
var AppRouter = Backbone.Router.extend({
    routes: {
        "": "top",
    },
    top: () => {
        app.page = new TopPage(app);
        app.page.onCreate();
    }
});
$(() => {
    app.start();
    app.router = new AppRouter();
    Backbone.history.start();
});
