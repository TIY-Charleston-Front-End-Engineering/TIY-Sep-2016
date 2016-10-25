var appContainer = document.querySelector('#app-container')


var CountryModel = Backbone.Model.extend({
   url: "",

   idAttribute: "numericCode",

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
      countriesCollInstance.fetch().then(function(serverRes){
         var countryTableViewInstance = new CountriesTableView()
         //(2) Passing data to a view's render function
         //    ( see notes on bb-views-intermediate.js )
         countryTableViewInstance.render(countriesCollInstance)
      })
   },

   showCountry: function(countryName){


      var modlInstance = new CountryModel(countryName)
      modlInstance.fetch().then(function(){
         var singleViewInstance = new SingleCountryView()
         singleViewInstance.render(modlInstance)

      })
   },

   showHomePage: function(){
      //(1) creating a new instance of a view
      var homeViewInstance = new HomeView()
      homeViewInstance.render()

   },

   initialize: function(){
      console.log('backbone ROUTING')
      Backbone.history.start()
   }
})

var app = new AppRouter()
