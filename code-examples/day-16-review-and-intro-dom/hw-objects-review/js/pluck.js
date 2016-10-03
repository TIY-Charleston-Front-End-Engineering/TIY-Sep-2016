// OTHER EXAMPLE OF EXPECTED OUTPUT FROM PLUCK
var pets = [
   {type: 'dog', trick: 'sit', name: 'bill', gender: 'male' },
   {type: 'dog', trick: 'shake', name: 'janice', gender: 'male' },
   {type: 'cat', trick: 'none', name: 'jinny', gender: 'female'},
   {type: 'cat', trick: 'none', name: 'timmy', gender: 'male'}
]

//INPUT: Array of objects, string
var pluck = function(arrOfObjects, propName){
   var arrayCopy = []

   for (var i = 0 ; i < arrOfObjects.length; i += 1){

      var itemObject = arrOfObjects[i]
      var valueForPropertyName = itemObject[propName]
      arrayCopy.push( valueForPropertyName )

      //arrOfObjects[i][propName]

   }
   // console.log(arrayCopy)
   //OUTPUT: Array of values?
   return arrayCopy
}


var gendersList = pluck(pets, 'gender')
//should return => ['male', 'male','female','male']
console.assert( gendersList[0] === 'male'  )
console.assert( gendersList[2] === 'female'  )

// should return => ['dog', 'dog','cat','cat']
console.assert( pluck(pets, 'type')[1] === 'dog' )
console.assert( pluck(pets, 'type')[3] === 'cat' )
