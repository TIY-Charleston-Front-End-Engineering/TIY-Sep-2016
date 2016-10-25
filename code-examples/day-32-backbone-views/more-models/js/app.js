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
      countriesCollInstance.fetch().then(function(serverRes){

         //(1) itertating over a collection's models
         countriesCollInstance.models.forEach(function(bbModl, i){
            console.log(bbModl)

            // (2) accessing an attribute w/ a string value
            appContainer.innerHTML += "<p>" + bbModl.get('name') + "</p>"

            // (2) accessing an attribute w/ an object value... here we are accessing the .ja property
            appContainer.innerHTML += "</h6>" + bbModl.get('translations').ja + "</h6>"


            // (3) accessing an attribute w/ an array value

            //bbModl.get('borders')[0]
            //bbModl.get('borders')[1]

            // .... here we are iterating over it
            bbModl.get('borders').forEach(function(brdrStr){
               appContainer.innerHTML += '<small>&nbsp;' + brdrStr + '</small> |'
             })

            // (4) Bonus content : .map().join() to concatentate an html string

            //  appContainer.innerHTML += bbModl.get('borders')
            //                            .map(function(brdrStr){ return '<small>&nbsp;' + brdrStr + '</small> |'})
            //                            .join('')

            appContainer.innerHTML += "<hr/>"


         })
      })
   },

   showCountry: function(countryName){

      appContainer.innerHTML = "<h1 class='bg-info'>"+ countryName +"</h1>"

      var modlInstance = new CountryModel(countryName)
      modlInstance.fetch().then(function(){
         console.log(modlInstance)

         var countryTitle = modlInstance.get('name')
         var theCapital = modlInstance.get('capital')

         appContainer.innerHTML += "<h3>"+countryTitle +"</h3>"
         appContainer.innerHTML += "<h5>"+theCapital +"</h5>"

         // modlInstance.set('hasVisited', true)
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
