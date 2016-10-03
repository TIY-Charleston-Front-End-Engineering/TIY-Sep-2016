//-----------------------------------------
// partyBouncer()
//   You are having a party where alcohol will be served
//   and you don't want to let in underage guests or rowdy felons
//
//   Take an array of objects, test to see which guests are older than 21
//   and convert it into an array of strings with the name only.
//------------------------------------------

var listOfPeople = [
  { name: 'Jimmy Drayfus', age: 16, isFelon: true },
  { name: 'Sherry Tomkins', age: 33, isFelon: false },
  { name: 'Romy Podolski', age: 17, isFelon: false },
  { name: 'Buffy Chang', age: 25, isFelon: true },
  { name: 'Rufus Johnson', age: 38, isFelon: false },
  { name: 'Tammy Barkley', age: 20, isFelon: false },
  { name: 'Harry McCormick', age: 39, isFelon: false},
  { name: 'Shannon O\'Bannon', age: 31, isFelon: false},
  { name: 'Greta Irishkov', age: 22, isFelon: false},
  { name: 'Maria Lewandowski', age: 28, isFelon: true},
  { name: 'Bobby Francois', age: 28, isFelon: false},
  { name: 'Salomon Marzococo', age: 14, isFelon: false },
  { name: 'Ahmad Funchess', age: 44, isFelon: true}
]

// INPUT: Array of objects
var partyBouncer = function(arrOfObjects, age){

   var arrayOfNameStrings = []

   for(var i = 0 ; i < arrOfObjects.length ; i += 1){
      var guestObject = arrOfObjects[i]
      // console.log( guestObject )

      if( guestObject.age >= age  && guestObject.isFelon === false ){
         console.log(guestObject.name)
         arrayOfNameStrings.push( guestObject.name )
      }

   }


   return arrayOfNameStrings

///OUTPUT: Array of Strings
}

var guestList = partyBouncer(listOfPeople, 18)

// console.assert(guestList.length === 6)
// console.assert(guestList[0] === "Sherry Tomkins")
// console.assert(guestList[5] === "Bobby Francois")
