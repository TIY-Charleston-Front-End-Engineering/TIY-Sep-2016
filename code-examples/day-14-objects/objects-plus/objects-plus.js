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
   }
]

console.log("ACCESSING Object Values Inside Arrays")
console.log("=================")

//ACCESS THE ARRAY OF OBJECTS
console.log('\n\n\n\n the ARRAY of objects')
console.log('---------------')
console.log(theBestMovies)

// accessing an OBJECT in `theBestMovies` Array
console.log('\n\n\n\n a single OBJECT in `theBestMovies` array')
console.log('----------------')
console.log(theBestMovies[1])

// ACCESSING A PROPERTY's VALUE IN an object that is in OUR `theBestMovies` Array
console.log('\n\n\n\n a single VALUE in one of the array\'s object (at index-1)')
console.log('----------------')
console.log(theBestMovies[1].title)
