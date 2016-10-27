var UserModel = Backbone.Model.extend({
   idAttribute: 'email'
   // initialize: function(bookId){
   //    this.url = "path/to/user/"+userId
   // }
})


var UserCollection = Backbone.Collection.extend({
   model: UserModel,
   parse: function(rawJSONRes){
      return rawJSONRes.results
   },
   initialize: function(qryStr){
      this.url = "https://randomuser.me/api?"+qryStr
   }

})
