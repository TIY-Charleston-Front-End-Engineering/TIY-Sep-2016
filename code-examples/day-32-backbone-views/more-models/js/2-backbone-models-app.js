//routes
// https://flags.fmcdn.net/data/flags/small/ca.png
var appContainer = document.querySelector('#app-container')

// (1) extend Model Constructor
var CountryModel = Backbone.Model.extend({
   url: "",

   initialize: function(cVal){
      console.log(cVal)
      // (2) configuring url dynamically
      this.url = "https://restcountries.eu/rest/v1/alpha/"+cVal
   }
})

var AppRouter = Backbone.Router.extend({
   routes: {
      "show-country/:countryName":'showCountry',
      "" : "showHomePage"
   },

   showCountry: function(countryName){
      appContainer.innerHTML = "<h1 class='bg-info'>"+ countryName +"</h1>"

      // (2) creating a model instance with `new` keyword
      var modlInstance = new CountryModel(countryName)

      // (3) fetching data from an API
      modlInstance.fetch().then(function(){

         // (3) accessing the returned data on the model instance
         var theCapital = modlInstance.get('capital')
         console.log( theCapital )

         //(4) setting values on model instance
         modlInstance.set('hasVisited', false)
         console.log(modlInstance)
      })
   },



   showHomePage: function(){
      appContainer.innerHTML = "<h1> Search for a country </h1>"

      appContainer.innerHTML += "<input type='text' class='form-control' id='country-name'>"
      appContainer.innerHTML += "<button class='btn btn-primary'>Get Country Info</button>"
      document.querySelector('button').addEventListener('click', function(){
         var inputEl = document.querySelector('#country-name')
         window.location.hash = 'show-country/' + inputEl.value
         inputEl.value = ''
      })
   },

   initialize: function(){
      console.log('backbone ROUTING')
      Backbone.history.start()
   }
})

var app = new AppRouter()
