/**
 * Created by s.zhitenev on 12.01.2016.
 *
 */
'use strict';

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

window.onload = function(){

    window.app = {};
    //models
    window.app.models = {};
    window.app.models.User = Backbone.Model.extend(require('./app/models/userModel'));

    //collections
    window.app.collections = {};
    window.app.collections.Users = Backbone.Collection.extend(require('./app/collections/usersCollection'));

    //views
    window.app.views = {};
    window.app.views.userDetail = Backbone.View.extend(require('./app/views/userDetailView'));

    //router
    window.app.Router = Backbone.Router.extend(require('./app/route'));
    var router = new window.app.Router();
    Backbone.history.start();
};