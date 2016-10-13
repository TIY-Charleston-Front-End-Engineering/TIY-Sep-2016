// (1) setTimeout(cb, msNum)

var logADelayedMessage = function(){
   console.log('A representative is now on the line')
}

console.log("Please hold, and a rep will get back to you shortly.")
setTimeout(logADelayedMessage, 4000 )

//
// (2) setInterval(cb, msNumInterval)
/// var intervalId = setInterval(cb, msNumInterval)
//     ... and evenutally .... clearInterval(intervalId)
var timerEl = document.querySelector('.timer')

var end = 0
var currentTime = 30 // our starting time

var timerCountdown = function(){
   timerEl.innerHTML = currentTime + " "

   if(currentTime <= 0 ){
      clearInterval(intervalId)
   }

   currentTime -= 1
}

var intervalId = setInterval(timerCountdown, 300 )




// (3) WHAT IS ASYNC ??? THIS IS ASYNC.....

var logADelayedMessage = function(){
   console.log('Something WEIRD Happening')
}


console.log("Marco Polo")
setTimeout(logADelayedMessage, 0 ) //asynchronous

console.log('hey')
console.log('nice functions for us')







//
