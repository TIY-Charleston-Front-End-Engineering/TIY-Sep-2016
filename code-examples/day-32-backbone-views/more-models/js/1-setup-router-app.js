//routes
// https://flags.fmcdn.net/data/flags/small/ca.png
var appContainer = document.querySelector('#app-container')

var AppRouter = Backbone.Router.extend({
   routes: {
      "" : "showHomePage"
   },

   showHomePage: function(){
      console.log('routing to home')
      appContainer.innerHTML = "<h1>Home</h1>"
   },

   initialize: function(){
      console.log('backbone ROUTING')
      Backbone.history.start()
   }
})

var app = new AppRouter()
