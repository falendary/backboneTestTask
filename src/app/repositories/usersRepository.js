/**
 * Created by s.zhitenev on 12.01.2016.
 */
(function(){

    'use strict';

    var getUsersList = function(){
        return fetch('data.json', {
            methot: 'GET',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            }
        }).then(function(data){
           return data.json();
        })
    };

    module.exports = {
        getUsersList: getUsersList
    }

}());