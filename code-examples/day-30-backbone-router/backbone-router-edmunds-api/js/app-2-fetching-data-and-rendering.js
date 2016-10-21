// https://api.edmunds.com/api/vehicle/v2/makes?api_key=tsc2h7h95njnr6cmddxkvhnp

//
// #make/:name
//
// #make/:name/model/:model
//
//
// #make/:name/model/:id
//
// #make/:name/year/:yr
//
// #all-makes

//
//
//
// var makeTable = function(headers, rowVals){
//    var bigTableStr = '<table class="table table-striped">'
//        bigTableStr += '<thead>'
//        bigTableStr += '<'
//
//    var
// }
//
// $.getJSON("https://api.edmunds.com/api/vehicle/v2/makes?api_key=tsc2h7h95njnr6cmddxkvhnp")
//    .then(function(serverRes){
//       console.log(serverRes)
//    })

var appContainer = document.querySelector("#app-container")

var AppRouter = Backbone.Router.extend({
   routes: {
      "year" : "showYearPage",
      "makes/:makeName": 'showModelsForMakePage',
      "makes" : "showMakesPage",

      // the default catch-all route
      "*path": "showHomePage"

   },



   showHomePage: function(){
      appContainer.innerHTML = "<h1>Welcome Home</h1>"
      appContainer.innerHTML += "<a class='btn btn-primary' href='#makes'>Makes</a>"
      appContainer.innerHTML += "&nbsp;"
      appContainer.innerHTML += "<a class='btn btn-primary' href='#year'>Year</a>"

   },

   // FETCHING + RENDERING DATA ON THE ROUTER
   showMakesPage: function(){
      $.getJSON("https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=tsc2h7h95njnr6cmddxkvhnp")
         .then(function(serverRes){
            generateMakesTemplate(serverRes.makes)
         })

      appContainer.innerHTML = "<h2 class='bg-success'>Makes Page</h2>"
   },

   showModelsForMakePage: function(maykName){
      appContainer.innerHTML += "<h2 class='bg-warning'> " + maykName + "</h2>"

   },

   showYearPage: function(){
      appContainer.innerHTML = "<h2 class='bg-info'>Year Models Page</h2>"

   },

   initialize: function(){
      console.log("hey guys")
      Backbone.history.start();
   }
})


var generateMakesTemplate = function(makesList){
   makesList.forEach(function(makeObj){
      appContainer.innerHTML += "<p><a href='#"+makeObj.niceName+"'>" + makeObj.name + "</a></p>"
   })
}


var myApp = new AppRouter()
