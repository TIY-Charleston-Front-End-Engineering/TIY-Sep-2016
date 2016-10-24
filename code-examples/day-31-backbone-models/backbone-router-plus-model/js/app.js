//routes
// https://flags.fmcdn.net/data/flags/small/ca.png
var appContainer = document.querySelector('#app-container')


var CountryModel = Backbone.Model.extend({
   url: "",

   defaults: {
      hasVisited: false,
      isCool: true
   },

   initialize: function(cVal){
      this.url = "https://restcountries.eu/rest/v1/alpha/"+cVal
   }
})

var CountriesCollection = Backbone.Collection.extend({
   model: CountryModel,
   url: "",
   initialize: function(rVal){
      this.url = "https://restcountries.eu/rest/v1/region/"+rVal
   }
})


var AppRouter = Backbone.Router.extend({
   routes: {
      "show-region/:regionName" : "showCountriesByRegion",
      "show-country/:countryName":'showCountry',
      "" : "showHomePage"
   },

   showCountriesByRegion: function(regionName){
      var countriesCollInstance = new CountriesCollection(regionName)
      countriesCollInstance.fetch().then(function(){
         console.log(countriesCollInstance)
         countriesCollInstance.remove('cid3')
      })
   },

   showCountry: function(countryName){
      appContainer.innerHTML = "<h1 class='bg-info'>"+ countryName +"</h1>"

      var modlInstance = new CountryModel(countryName)
      modlInstance.fetch().then(function(){
         var theCapital = modlInstance.get('capital')
         console.log( theCapital )
         modlInstance.set('hasVisited', true)
         // console.log(modlInstance)
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
