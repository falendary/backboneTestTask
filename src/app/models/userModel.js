/**
 * Created by s.zhitenev on 12.01.2016.
 */
(function(){

    module.exports = function(){
        var self = this;
        this.id = '';
        this.firstName = '';
        this.lastName = '';
        this.age = '';
        this.location = '';
        this.deserialize = function(data){
            self.id = data.id;
            self.firstName = data.first_name;
            self.lastName = data.last_name;
            self.age = data.age;
            self.location = data.location;
            return self;
        }
    }

}());