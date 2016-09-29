// Creates an empty object 'literal'
var boringObj = {}

// Creating an object with properties and values
var jordanObj = {
   nombre: "Jordan",
   age: 23,
   isAlive: true,
}

console.log('========================')
console.log('(1) LOGGING THE OBJECT')
console.log('------------------------')
console.log(jordanObj)


// Creating an object with more properties and values...
// arrays can be values
// other objects can also be values
var michaelObj = {
   nombre: "Michael",
   age: 27,
   isAlive: true,
   hobbies: [
      "surfing",
      "skateboarding",
      "crossfit"
   ],
   gender: "male",
   profileImg:{
     img75x75: "/path/to/tn.img",
     img400x300: "/path/to/med.img"
   }
}



// Accessing Object Values
console.log('\n\n\n\n\n\n========================')
console.log('(2) ACCESSING OBJECT VALUES ')
console.log('------------------------')
console.log( michaelObj.nombre ) // access with dot-notation
console.log( michaelObj['age']) //  access with bracket-notation



// Accessing Object Properties
console.log('\n\n\n\n\n\n========================')
console.log('(3) WRITING + MODIFYING PROPERTIES')
console.log('------------------------')

michaelObj.height = 68
michaelObj.age = 15
michaelObj['nombre'] = 'Mike'

console.log(michaelObj.height)
console.log(michaelObj.age)
console.log(michaelObj.nombre)
