// ======================
// (1) JS Example Use Case 1 : HTML (DOM) Manipulation
document.querySelector('h1.title').innerHTML = "Welcome to Travis's JS Party"


// ======================
// (2) JS+HTML Example : Creating a Dynamic List of HTML Elements

var listOfNames = [
   "Phil",
   "Jill",
   "Hill",
   "Baby Shampoo",
   "Shamwow",
   "Connie",
   "Jordan",
   "Frank",
   "Abu",
   "Will",
   "Bill",
   "Travis",
   "Gil",
   "I dont belong"
]

var ulContainer = document.querySelector('ul')

for (var i = 0 ; i < listOfNames.length ; i = i + 1){

   if (listOfNames[i].indexOf('il') > -1 ){
      ulContainer.innerHTML += "<li>" + listOfNames[i] +"</li>"
   }

}


// ======================
// (3) JS+HTML Example : Conditional HTML on Screen
var pTagSentenceExample = document.querySelector('.sentence-example')
var destinationElement = document.querySelector('h4 strong')

if (pTagSentenceExample.textContent.length > 40 ){

   destinationElement.innerHTML = "This sentence is SO long!!!"

} else {

   destinationElement.innerHTML = "Not very long, eat your green beans and spinach."

}

// ======================
// (4)  JS+HTML Example : Event Listening + Event Handling
var btnElement = document.querySelector('button')
var containerEl = document.querySelector('.container')

var destroyEverything = function(){
   containerEl.innerHTML = "<h3><mark>I told you not to push<br>I told you not to push<br>I told you not to push<br></mark></h3>"
}

btnElement.addEventListener('click', destroyEverything)
