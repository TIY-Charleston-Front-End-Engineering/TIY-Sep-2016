// the forEach function
var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}

var jukeBoxSongs = [
  {
     artist: "Guns N Roses",
     song: "Live & Let Die",
     album: "Use Your Illusion"
  },
  {
     artist: "Led Zeppelin",
     song: "When the Levee Breaks",
     album: "Led Zeppelein IV"
  },
  {
     artist: "Guns N Roses",
     song: "Live & Let Die",
     album: "Use Your Illusion"
  },
  {
     artist: "Eric Prydz",
     song: "Call on Me",
     album: "EP"
  },
  {
      artist: "Nirvana",
      song: "In Bloom",
      album: "Nevermind"
  },
  {
      artist: "Pearl Jam",
      song: "Better Man",
      album: "Vitalogy"
  },
  {
     artist: "LCD Soundsystem",
     song: "Dance Yrself Clean",
     album: "This is Happening"
  },
  {
     artist: "Spoon",
     song: "Dont You Evah",
     album: "Ga Ga Ga Ga Ga"
  }
 ]


var putSongOnPage = function (songObj){
   var tbodyEl = document.querySelector('table tbody')
   var newRowString = ''
   newRowString += "<tr>"
   newRowString +=    "<td><input type='checkbox' class='checker'></td>"
   newRowString +=    "<td>"+songObj.artist +"</td>"
   newRowString +=    "<td class='songName'>"+songObj.song +"</td>"
   newRowString +=    "<td>"+songObj.album +"</td>"
   newRowString += "</tr>"

   tbodyEl.innerHTML += newRowString
}

//PART 1 put array of song obects on the DOM

//forEACH EXAMPLE-1
forEach( jukeBoxSongs, putSongOnPage )

//PART 2 : inside of an event-handler's callback to filter for the checked songs

var songListPlayerContainerEl = document.querySelector(".song-list-player")
var allCheckBoxEls = document.querySelectorAll("tr input.checker")
var makePlaylistBtnEl = document.querySelector('.add-to-pl')


var appendSongToList = function(inputEl){
   if(inputEl.checked){
      var songNameStr = inputEl.parentNode.parentNode.children[2].textContent
      songListPlayerContainerEl.innerHTML += "<li>"+ songNameStr + "</li>"
   }
}

var filterTheCheckedRows = function(){
   //forEach EXAMPLE-2
   forEach(allCheckBoxEls, appendSongToList )
}

makePlaylistBtnEl.addEventListener('click', filterTheCheckedRows)
