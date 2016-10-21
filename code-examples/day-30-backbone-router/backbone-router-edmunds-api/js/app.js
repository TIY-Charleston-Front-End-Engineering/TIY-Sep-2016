// https://api.edmunds.com/api/vehicle/v2/makes?api_key=tsc2h7h95njnr6cmddxkvhnp


// ALL MODELS FOR A MAKE
//------------------------
// https://api.edmunds.com/api/vehicle/v2/acura/models/count?fmt=json&state=new&api_key=tsc2h7h95njnr6cmddxkvhnp


// ALL CAR MAKES FROM YEAR 1995
//------------------------
// http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&year=1995&api_key=tsc2h7h95njnr6cmddxkvhnp


// ALL YEARS FOR A MAKE/MODEL
//------------------------
//https://api.edmunds.com/api/vehicle/v2/lexus/rx350?fmt=json&year=2011&api_key=tsc2h7h95njnr6cmddxkvhnp

// ALL STYLES FOR A MAKE/MODEL/YEAR
//------------------------
//https://api.edmunds.com/api/vehicle/v2/lexus/rx350?fmt=json&year=2011&api_key=tsc2h7h95njnr6cmddxkvhnp


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
      "year/:year" : "showModelsForYearPage",
      "makes/:makeName/:modelName": "showYearsForModelMake",
      "makes/:makeName": 'showModelsForMakePage',
      "makes" : "showMakesPage",
      // the default catch-all route
      "": "showHomePage",
      "*path": "goEffYourself"

   },

   goEffYourself: function(){
      appContainer.innerHTML = "<h1 class='bg-danger'> Go eff yourself, nothin here </h1>"
   },


   showHomePage: function(){
      appContainer.innerHTML = "<h1>Welcome Home</h1>"
      appContainer.innerHTML += "<a class='btn btn-primary' href='#makes'>Makes</a>"
      appContainer.innerHTML += "&nbsp;"
      appContainer.innerHTML += "<a class='btn btn-primary' href='#year'>Year</a>"

   },

   // FETCHING + RENDERING DATA WITH
   showMakesPage: function(){
      $.getJSON("https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=tsc2h7h95njnr6cmddxkvhnp")
         .then(function(serverRes){
            generateMakesTemplate(serverRes.makes)
         })

      appContainer.innerHTML = "<h2 class='bg-success'>Makes Page</h2>"
   },

   showModelsForMakePage: function(maykName){
      $.getJSON("https://api.edmunds.com/api/vehicle/v2/"+ maykName +"/models?fmt=json&state=new&api_key=tsc2h7h95njnr6cmddxkvhnp")
         .then(function(serverRes){
            console.log(serverRes)
            generateModelsTemplate(serverRes.models, maykName)
         })
      appContainer.innerHTML = "<h2 class='bg-warning'>Models for: " + maykName + "</h2>"

   },


   showYearsForModelMake: function(mkName, modName){
      $.getJSON('https://api.edmunds.com/api/vehicle/v2/'+mkName+'/'+modName+'?api_key=tsc2h7h95njnr6cmddxkvhnp')
         .then(function(serverRes){
            console.log(serverRes)
            appContainer.innerHTML = "<h2 class='bg-info'>Model Years Page -- " + serverRes.name +  "</h2>"
            generateYearModelsTemplate(serverRes.years)

         })


   },


   initialize: function(){
      console.log("hey guys")
      Backbone.history.start();
   }
})


var generateMakesTemplate = function(makesList){
   makesList.forEach(function(makeObj){
      appContainer.innerHTML += "<p><a href='#makes/"+makeObj.niceName+"'>" + makeObj.name + "</a></p>"
   })
}

var generateModelsTemplate = function(modelsList, makeNameInHash){
   modelsList.forEach(function(modelObj){
      appContainer.innerHTML += "<p><a href='#makes/"+makeNameInHash + '/' + modelObj.niceName+"'>" + modelObj.name + "</a></p>"
   })
}

var generateYearModelsTemplate = function(yearsList){
   yearsList.forEach(function(yearObj){
      appContainer.innerHTML += "<p><a href='#bye'>" + yearObj.year + "</a></p>"
   })
}

var myApp = new AppRouter()
