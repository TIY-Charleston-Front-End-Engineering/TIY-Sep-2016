console.log($)

var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}

var moviesContainer = document.querySelector('.movies')

var putDataOnPage = function(returnedData){
   console.log(returnedData)


   forEach( returnedData.Search , function(movieObj){
      // console.log(movieObj.Title, movieObj.Year, movieObj.Poster)
      var bigStr =     '<div class="col-sm-6 col-md-6">'
        bigStr +=       '<div class="thumbnail">'
        bigStr +=       '<img src="' + movieObj.Poster + '" alt="...">'
        bigStr +=         '<div class="caption">'
        bigStr +=           '<h3>' + movieObj.Title + '</h3>'
        bigStr +=           '<p>' + movieObj.Year + '</p>'
        bigStr +=         '</div>'
        bigStr +=       '</div>'
        bigStr +=     '</div>'

      moviesContainer.innerHTML += bigStr
      // console.log('---------------')
   })

}

// Promise                                    Promise-Handler
$.getJSON('http://www.omdbapi.com/?s=wolf&page=2').then(putDataOnPage)

console.log("WHO GOES FIRST?????")
