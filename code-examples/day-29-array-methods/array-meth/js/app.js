var myMap = function(arr, cbFn){
   var arrBuilder = []
   for(var i = 0 ; i < arr.length; i += 1){
      var output = cbFn(arr[i], i, arr)
      arrBuilder.push(output)

   }

   return arrBuilder
}

var myFilter = function(arr, cbFn){
   var arrBuilder = []
   for(var i = 0 ; i < arr.length; i += 1){
      var output = cbFn(arr[i], i, arr)
      if(output === true){
         arrBuilder.push(arr[i])
      }

   }

   return arrBuilder
}





// Constructor Function 101
$.getJSON("https://congress.api.sunlightfoundation.com/legislators?apikey=7ba96d266cc84b168fab4d878d9aa141")
   .then(function(serverResponse){
      console.log(serverResponse.results)
      var arrayOfCongressPeople = serverResponse.results


      var transformedArrayCopy = arrayOfCongressPeople.map(function(congoPerson){
         var fullNameAndTutle = congoPerson.title + " " +  congoPerson.first_name + " " + congoPerson.last_name

         return fullNameAndTutle
         // return fullNameAndTutle.length
         // return { nameTitle: fullNameAndTutle, len:  fullNameAndTutle.length}

      })

      console.log('transformedArrayCopy', transformedArrayCopy)


      //
      var filteredArray = arrayOfCongressPeople.filter(function(congoPerson){
         console.log(congoPerson.first_name)
         if(congoPerson.chamber === 'senate'){
            return true
         } else {
            return false
         }
      })
      //
      // console.log('filteredArrayCopoy', filteredArray)






   })
