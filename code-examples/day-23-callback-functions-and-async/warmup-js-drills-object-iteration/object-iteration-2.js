// ---------------------------------------
// EXERCISE : objectSlice()
//  (taking an object and an array of keys and returning a smaller object)
// ---------------------------------------
// Write an `objectSlice` function that takes an object and an array of property names
// and returns an object with properties and values whose keys correspond to the array
// of property names




var largeObject = {
   name: "Tanya Underboo",
   ss: 3334538763,
   dob: "08-09-1973",
   gender: "female",
   occupation: "dentist",
   isActive: true,
   siblings: 0,
   hobbies: ['dancing', 'karaoke', 'cooking', 'golf' ]
}

//EXAMPLE:
// ----------------------------------
// objectSlice(fatObject, ['name', 'gender', 'occupation'])
// => {
//    name: 'Tanya Underboo',
//    gender: 'female',
//    occupation: 'dentist'
// }

console.log('WIRED UP!')

//INPUTS:  an object, an array of strings (property names for obj)
var objectSlice = function(bigObj, arrOfPropNames){
   var builderObject = {}

   for (var i = 0; i < arrOfPropNames.length; i += 1){
      console.log(arrOfPropNames[i])
      var propName = arrOfPropNames[i]

      if( typeof bigObj[propName] !== 'undefined'){

         builderObject[propName] = bigObj[propName]

      }


   }
   console.log(builderObject)
   //
   // {
   //    name: ''
   //    ss: ''
   //    dob: ''
   // }
   //
   return builderObject
   //OUTPUT: object
}


var slimObject1 = objectSlice(largeObject, ['name', 'ss', 'dob', 'pumpkin'])
console.assert( typeof slimObject1.name !== 'undefined'  )
console.assert( typeof slimObject1.ss !== 'undefined'  )
console.assert( typeof slimObject1.isActive === 'undefined'  )

var slimObject2 = objectSlice(largeObject, ['name', 'gender', 'isActive', 'siblings', 'pumpkin'])
console.assert( typeof slimObject2.name !== 'undefined'  )
console.assert( typeof slimObject2.gender !== 'undefined'  )
console.assert( typeof slimObject2.siblings !== 'undefined')
console.assert( typeof slimObject2.ss === 'undefined'  )
console.assert( typeof slimObject2.hobbies === 'undefined'  )
