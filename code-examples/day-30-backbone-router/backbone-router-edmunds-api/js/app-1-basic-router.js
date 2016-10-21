
var appContainer = document.querySelector("#app-container")

var AppRouter = Backbone.Router.extend({
   routes: {
      // "routeName" : "name of routeMethod"
      "year" : "showYearPage",
      "makes" : "showMakesPage",

      // the default catch-all route
      "*path": "showHomePage"

   },

   // routeMethod
   showHomePage: function(){
      appContainer.innerHTML = "<h1>Welcome Home</h1>"
   },

   showMakesPage: function(){
      appContainer.innerHTML = "<h2 class='bg-success'>Makes Page</h2>"
   },

   showYearPage: function(){
      appContainer.innerHTML = "<h2 class='bg-info'>Year Models Page</h2>"

   },

   initialize: function(){
      console.log("hey guys")
      // starts the router
      Backbone.history.start();
   }
})

// creates an instance of the route
var myApp = new AppRouter()
