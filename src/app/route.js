/**
 * Created by s.zhitenev on 12.01.2016.
 *
 */
var app = window.app || {};
(function(){

    module.exports = {
        routes: {
            '': "userDetail",
            ":id": "userDetail"
        },

        userDetail: function(id) {
            id = id || 2;
            var userDetailView = new app.views.userDetail(id);
            $('#view').html(userDetailView.el)
        }
    }

}());