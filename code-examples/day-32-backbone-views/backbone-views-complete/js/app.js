//routes
// https://flags.fmcdn.net/data/flags/small/ca.png
var contentContainer = document.querySelector('.content-area')

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
      var modlInstance = new CountryModel(countryName)
      modlInstance.fetch().then(function(){
            var viewInstance = new ContentView(showSingleCountryTempl)
            viewInstance.render(modlInstance)
      })
   },



   showHomePage: function(){
      var homeView = new HomeView(homePageTemplateFn)
      homeView.render()
   },

   initialize: function(){
      console.log('backbone ROUTING')
      var navView = new NavView(navViewTemplateFn)
      navView.render()
      Backbone.history.start()
   }
})



var app = new AppRouter()
