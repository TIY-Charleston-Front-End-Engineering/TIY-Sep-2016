//-----------------------------------------
// .map()
//   Use the  Array.prototype.map() function to return an array of
//   strings as names for all the countries
//------------------------------------------

$.getJSON("https://restcountries.eu/rest/v1/all").then(function(resultsArray){
   // YOUR WORK HERE
   var tranformedArrayCopy = resultsArray.map( function( singleEl ){ return   } )
   var countryNamesArray = resultsArray.map(function(arrayEl, index, arr){
      return arrayEl.name
   })

})


//-----------------------------------------
// .filter()
//   Use the Array.prototype.filter() function to return an array of
//   JSON objects that are in the Asia region
//------------------------------------------

$.getJSON("https://restcountries.eu/rest/v1/all").then(function(resultsArray2){
   // YOUR WORK HERE
   var filteredListArr = resultsArray2.filter(function(arrayEl, index, arr){
      if( arrayEl.region === 'Asia'){
         return true
      } /*optional */else {
         return false
      }
   })

})

//-----------------------------------------
// .filter().map()
//   Chain the Array.prototype.filter() and .map() functions  to return an array of
//   strings with the names of countries that have populations  < 5,000,000
//------------------------------------------
$.getJSON("https://restcountries.eu/rest/v1/all").then(function(resultsArray3){
   // Verbose Way
   var filteredArray = resultsArray3
      .filter(function(countryObj){
         if(countryObj.population <= 5000000){
            return true
         }
      })

   var namesListSmallCountries = filteredArray.map(function(countryObj){
         return countryObj.name
   })

   // NINJA Way
   var filterSmallsFn = function(coObj){ return coObj.population <= 5000000 }
   var getNamesFn = function(coObj){ return coObj.name }

   var namesListSmallCountriesDeux = resultsArray3.filter(filterSmallsFn).map(getNamesFn)

   console.log(namesListSmallCountriesDeux)
})

// BONUS!
//-----------------------------------------
// .reduce()
//   Use the Array.prototype.reduce() function to calculate the total population
//   number value for those in countries with total populations < 5,000,000
//------------------------------------------
