/**
 * Created by s.zhitenev on 12.01.2016.
 */
(function(){

    'use strict';

    var indexRepository = require('../repositories/usersRepository');
    var User = require('../models/userModel');

    var getUsersList = function(){
        return indexRepository.getUsersList().then(function(data){
            return data.map(function(item){
                return new User().deserialize(item);
            });
        });

    };

    module.exports = {
        getUsersList: getUsersList
    }

}());