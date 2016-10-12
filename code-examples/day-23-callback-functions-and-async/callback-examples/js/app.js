var contentDiv = document.querySelector('.content')

//(1) confirmAction
var confirmAction = function(cb){

   var response = prompt('Are you sure you wanna run the command: ' + cb.name + '? [y/n]')
      if (response === 'y'){
         console.log('executing: ', cb.name )
         cb()
      } else {
         console.log('failed to execute', cb.name)
      }
}


var showMatureContent = function(){
    contentDiv.innerHTML += "<img src='http://i3.cpcache.com/product/863505865/bro_hard_or_bro_home_mens_tank_top.jpg'>"
    contentDiv.innerHTML += "<hr>"
}

var cussOutTheUser = function(){
    contentDiv.innerHTML += "<h3>Go eff yourself jerk</h3>"
    contentDiv.innerHTML += "<hr>"
}

var givePositiveMessage = function(){
   contentDiv.innerHTML += "<img src='http://m5.paperblog.com/i/57/577933/positive-messages-of-hope-L-8jDX2x.jpeg'>"
    contentDiv.innerHTML += "<hr>"
}


var showNegativeMessage= function(){
    contentDiv.innerHTML += "<img src='http://data.whicdn.com/images/41739810/original.jpg'>"
    contentDiv.innerHTML += "<hr>"
}

var showInterestingImage= function(){
    contentDiv.innerHTML += "<img src='http://121clicks.com/wp-content/uploads/2012/01/companion_photographs_04.jpg'>"
    contentDiv.innerHTML += "<hr>"
}

//
//

var changeImage = function(evt){
   console.log(evt)
   evt.target.src = 'http://photo.accuweather.com/photogallery/2011/10/500/024f74672.jpg'
}


confirmAction(showMatureContent)
confirmAction(cussOutTheUser)
confirmAction(givePositiveMessage)
confirmAction(showNegativeMessage)
confirmAction(showInterestingImage)


// //
// for(var i=0; i<allImages.length; i++){
//    console.log(allImages[i])
//    allImages[i].
// }

//
var allImages = document.querySelectorAll('img')
console.log(allImages)

var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i++){
      cb(arr[i], i, arr)
   }
}

forEach(allImages, function(imgElement){
      imgElement.addEventListener('click', changeImage)
})

// Showing more examples of forEach

// var arrOfNums = [88, 33, 4, 5, 6,6]
// var arrOfMoreNums = [3, 3, 5 ,4 ,5 ,9 , 39]
// var arrOfVals = ['hi', 'okay','great']
// var someFunction = function(){
//    console.log("yoooooo!")
// }
//
// var showDoubleNums = function(element, i){
//    console.log(element, 'at index:', i, ":::: doubled = ", element * 2)
// }
//
// // forEach(arrOfVals, someFunction )
// console.log('...........')
// forEach(arrOfNums, showDoubleNums )
// console.log('-=========')
// forEach(arrOfMoreNums, showDoubleNums )
