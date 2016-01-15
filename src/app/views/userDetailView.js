/**
 * Created by s.zhitenev on 12.01.2016.
 */

var app = window.app || {};

(function(){

    'use strict';

    var usersService = require('../services/usersService');

    module.exports = {
        template: Handlebars.compile( $('#userDetail').html()),
        initialize: function(id){
            console.log('Home view intialized...', id);
            var self = this;

            usersService.getUsersList().then(function(data){
                var vm = {};
                vm.user = data[id-1];
                vm.user.prevUserId = parseInt(vm.user.id, 10) - 1;
                vm.user.nextUserId = parseInt(vm.user.id, 10) + 1;
                vm.users = data;

                self.render(vm);
            });
        },
        render: function(vm){
            this.$el.html(this.template({
                user: vm.user,
                users: vm.users
            }));
        }
    }

}());