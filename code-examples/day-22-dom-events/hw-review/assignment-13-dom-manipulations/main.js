
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}


  //(1) Properly select the element
  var circleEl = document.querySelector('.circle-red')
  // console.log(circleEl)

  //(2) Capture the current height & width of circle El
  var elementStyles = window.getComputedStyle(circleEl)
   //   console.log(elementStyles.width)
   //   console.log( elementStyles.height)
     //NOTE: this is showing up as a STRING

    var elWidthString =  elementStyles.width
    var elHeightString = elementStyles.height


  //(3) Convert height/width of circle element from a string to an integer-value
  // console.log("=======")
  var elWidthStringNum = elWidthString.slice(0,-2)
  var elHeightStringNum = elWidthString.slice(0,-2)

  var currentElWidth =  parseInt(elWidthStringNum)
  var currentElHeight =  parseInt(elHeightStringNum)

  // console.log('current width/height', currentElWidth, currentElHeight)

  //(4) Double the integer-value of the height/width value
  var doubleWidth =  currentElWidth * 2
  var doubleHeight =  currentElHeight * 2
  // console.log('current width/height', doubleWidth, doubleHeight)

  //(END)  PROFIT : Double Element's Width & Height
  //                Modify the circleEl width and height property on the DOM

 if(doubleWidth > 320 ){
    circleEl.style.width = "40px"
    circleEl.style.height = "40px"
} else{

   circleEl.style.width = doubleWidth + "px"
   circleEl.style.height = doubleHeight + "px"

}






})




























document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})













document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8


   var imgEl = document.querySelector('#city-img')
   console.log('are you the one?', imgEl.src)

   // Split full file path into an array to isolate city-photo-«n»
   var splitSrcStrArr = imgEl.src.split('/')
   console.log(splitSrcStrArr)

   // Access `city-photo-«n»`
   var strToModify = splitSrcStrArr.pop()
   console.log(strToModify)

   //Isolate the number part of `city-photo-«n»`
   var cityPhotoXString = strToModify.split('.')[0]
   console.log(cityPhotoXString)

   var cityPhotoXArr = cityPhotoXString.split('-')
   console.log(cityPhotoXArr)

   var numString = cityPhotoXArr.pop()
   console.log(numString)

   //Convert the isolated numString to an integer and add 1
   var imgNum = parseInt(numString)
                           //1
   var nextImgNumCapped = imgNum % 10 + 1


   // Perform our if statment / logical operation
   // if(nextImgNum <= 10){
   //    var imgNumForDOM =   nextImgNum
   // } else {
   //    var imgNumForDOM = 1
   // }

   //Write to DOM
   imgEl.src =  './images/city-photo-' + nextImgNumCapped + '.jpg'
















})
