/// <reference path="./ractive.d.ts"/>
class TopPage implements Page {
    app : Application;
    ractive : Ractive.Ractive;
    
    constructor(app : Application) {
        this.app = app;
    }
    
    onCreate() {
        this.ractive = new Ractive({
            el : '#container',
            template : '#topTemplate',
        });
    }
}