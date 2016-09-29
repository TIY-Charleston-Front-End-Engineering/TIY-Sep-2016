// an array (with 4 objects)
var theBestMovies = [

   //object (at index-0)
   { director: 'stanley kubrick',
     title: 'the shining',
     year:1980
   },

   //object (at index-1)
   {
      director: 'francis ford coppola',
      title: 'apocalypse now',
      year: 1979
   },

   //object (at index-2)
   {
      director: 'steve barron',
      title: 'teenage mutant ninja turtles',
      year: 1990
   },

   //object (at index-3)
   {
      director: 'francis ford coppola',
      title: 'star wars',
      year: 1979
   },

]

// TASK 1
//-------------------------
// Console log all of the movie titles
for( var i = 0 ; i < theBestMovies.length ; i += 1){
   console.log(theBestMovies[i].title)
}


console.log("\n\n\n ------------ \n\n\n")



//Task 2
//----------------
// Create a function that returns an array of strings
//   It should take an an array of objects and return the value for each object's
//   'director' property
//

// INPUT: Array of Objects
var getDirectors = function(arrOfWorks){

   var arrOfDirectors = []

   for (var i = 0 ; i < arrOfWorks.length ; i += 1){
      console.log(arrOfWorks[i].director)
      arrOfDirectors.push(arrOfWorks[i].director)
   }

   return arrOfDirectors
   // OUTPUT: Array of Strings
}

var allMyFriendsArray = getDirectors(theBestMovies)

console.log(allMyFriendsArray)
