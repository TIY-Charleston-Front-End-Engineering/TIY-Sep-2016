// console.log(document)

// + Select an Element w/ document.querySelector(«el»)
//  ...returns first matching element
var headerSweetness = document.querySelector('#sweetness')
//  note: that element returned is an object
console.log(headerSweetness)


// + Add Text Content to an    element
headerSweetness.textContent = "My favorite element by far is the <hr/>"

// + Add HTML Markup *inside* an element
var theGottenEl = document.querySelector('.the-gotten')
theGottenEl.innerHTML = "I've been <strong>got</strong>"

//document.querySelector(«el») ...selects/returns first matching element
var tagsContainertEl = document.querySelector('.tagged-as')
tagsContainertEl.innerHTML += "<span>lavender soap</span>"


//+ Modify the class name of an element, with a css class that will provide
//  a different style
var hotTagItem = document.querySelector('.tagged-as span')
hotTagItem.className = 'so-hot'


 // + Change Style of an element with «element».style.«property»

var listOfChores = document.querySelector('.list-of-chores');
listOfChores.style.border = "10px cadetblue solid";
listOfChores.style.padding = "50px";
listOfChores.style.listStyleType = "square";



 // + Read then write width of line with getComputedStyle
var someLineEl = document.querySelector('.some-line')
//window.someLineEl

console.log(someLineEl.style.width)
var lineElStyles = window.getComputedStyle(someLineEl)
// console.log(lineElStyles)
console.log(lineElStyles.width.slice(0, -2))
var widthNumString = lineElStyles.width.slice(0, -2)

var widthNum = parseInt(widthNumString)
console.log(widthNum * 2)

someLineEl.style.width = widthNum * 2 + "px";





// + Selecting multiple elements w/ document.querySelectorAll(«css-selector»)
//   and basic iteration

var choreLiEls = document.querySelectorAll('.list-of-chores li')

console.log(choreLiEls)

for (var i = 0 ; i < choreLiEls.length ; i+=1){
   var singleChoreLiElement = choreLiEls[i]
   console.log( singleChoreLiElement.textContent )
}










//
