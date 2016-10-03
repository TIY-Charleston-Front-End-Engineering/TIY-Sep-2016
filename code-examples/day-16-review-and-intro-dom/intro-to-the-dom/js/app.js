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
var choresListContainer = document.querySelector('.list-of-chores')
choresListContainer.style.border = "3px solid slateblue"

 // + Add to width of line with getComputedStyle
var someLine = document.querySelector('.some-line')
var lineComputed = window.getComputedStyle( someLine)
var integerVal =  parseInt(lineComputed.width)
someLine.style.width = integerVal * 3 + "px"
