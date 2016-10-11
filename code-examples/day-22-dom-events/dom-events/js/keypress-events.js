// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes


var appendToStreamingThoughts = function(msg){
   var streamingThoughtsEl = document.querySelector('.travis-stream')
   var newLiNode = document.createElement('li')
   newLiNode.textContent = inputEl.value
   console.log(newLiNode)
   newLiNode.addEventListener('click', addToBottomLeft)
   streamingThoughtsEl.appendChild(newLiNode)
}

var addToBottomLeft = function(evt){
   console.log(evt.target.innerHTML)
   var btmLeftEl = document.querySelector('.bottom.left')
   btmLeftEl.appendChild(evt.target)
}


// (1)
var btnEl = document.querySelector('.adder')
var inputEl = document.querySelector('.info-source')

var doThisWhenClicked = function(){
   appendToStreamingThoughts(inputEl.value)
}

btnEl.addEventListener('click', doThisWhenClicked)



// (2)
var inputEl = document.querySelector('.info-source')

var respondToKey = function(evt){

   // handle when enter  key is pressed

   if(evt.keyCode === 13){
      console.log('key was pressed!!', evt.keyCode )
      console.log('input VAL', evt.target.value )
      appendToStreamingThoughts(evt.target.value )

   }

   // handle when down arrow key is pressed
   if(evt.keyCode === 40){
      document.querySelector('.bottom.left').innerHTML += "<h4>"+evt.target.value+"</h4>"

   }
}

inputEl.addEventListener('keydown', respondToKey )





var stopAllBtn = document.querySelector('.stop-everything')

var removeTheEventsHere = function(){
   btnEl.removeEventListener('click', doThisWhenClicked)
   inputEl.removeEventListener('keydown', respondToKey)

}

stopAllBtn.addEventListener('click', removeTheEventsHere)







// Demo getting info from input with button click
// demo getting info from input with keydown
   // enter puts string on list to right
   // down arrow puts string on bottom

// if on bottom, it is imageable
//
