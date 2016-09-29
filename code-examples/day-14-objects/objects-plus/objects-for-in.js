// ..............helper function...............

var _strContains = function(targetString, propName, splitter){
  var tgtFound = false
  var splitWrdsArr = propName.split(splitter)
  for(var i = 0 ; i < splitWrdsArr.length ; i++){
     if (splitWrdsArr[i] === targetString) {
         tgtFound = true
     }
  }
  return tgtFound
}

// console.log( _strContains('img', 'img_40x40', '_') )     // => true
// console.log( _strContains('img', 'gender', '_') )        // => true
// console.log( _strContains('img', 'img_400x4000', '_') )  // => true
// console.log( _strContains('img', 'job', '_') )           // => false

//.............................................

var jennyFromTheBlock = {
   name: "jenny",
   img_40x40: "selfy-ig-profile.png",
   job: 'seamstress',
   age:  28,
   img_60x60: "thumnail-me.jpg",
   img_100x100: "jenny-profile.jpg",
   img_244x244: "frend-kitkat.jpg",
   img_200x200: 389823892389893290823,
   gender: 'female',
   hobbies: ['instagram', 'selfies', 'american football'],
   img_500x500: "flag-football-teamphoto.jpg"
}



// TASK: Create an array of image file names from a big sloppy object

console.log("\n\n\n -----Objects For-In------- \n\n\n")


var imgFileNames = []
//THE FOR-IN LOOP

for (var theProp in jennyFromTheBlock){
   console.log(theProp)
   // console.log("property-name contains `img`? ",  _strContains('img', theProp , '_'))

   if( _strContains('img', theProp , '_') === true ){
      imgFileNames.push( jennyFromTheBlock[theProp] )
   }
}

console.log(imgFileNames)
