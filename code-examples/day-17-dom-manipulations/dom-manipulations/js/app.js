
// TASK 1 ADD MORE LIST ITEMS TO MY GROCERY LIST
//    * beer
//    * sardines
//    * cracker
//    * spam
//    * tums
//-------------------------------------------

//(1) select element that will be modified
var groceryListEl = document.querySelector('.grocery-list')
// console.log([groceryListEl])
// console.log(groceryListEl)



//(2) modify relevant property
//   OPTION A -- append to «domElment».innerHTML
console.log(groceryListEl.innerHTML)
groceryListEl.innerHTML = groceryListEl.innerHTML + '<li class="important">beer</li>'
groceryListEl.innerHTML += '<li>sardines</li>'

//   OPTION B -- use .createElement, createTextNode, and .appendChild()
var liEl = document.createElement('li')
var theTextNode = document.createTextNode('ritz crackers')
liEl.appendChild(theTextNode)
console.log(liEl)
liEl.className = "important priority"
groceryListEl.appendChild(liEl)


console.log("\n\n\n==============\n PART 2\n-------------")


//TASK 2 REMOVE MANY THINGS FROM A LIST
//------------------------------
// remove the elements that do not have the 'important' class

var removeUnimportantEls = function(){

   // select the <li> elements
   var listItemElements_ALL_LIs = document.querySelectorAll('.grocery-list li')
   console.log(listItemElements_ALL_LIs)

   for(var i = 0; i < listItemElements_ALL_LIs.length; i +=1){
      var listItemElement_LI = listItemElements_ALL_LIs[i]
      //console.log (listItemElement_LI.className, ' -- ', listItemElement_LI.classList.contains('important'))
      if(listItemElement_LI.classList.contains('important') === false){
         groceryListEl.removeChild(listItemElement_LI)
      }
   }
}


//TASK 3 -- Add a simple event listener to an element
//          and execute the function we created above to
//           respond to that event
//------------------------------

var btnEl = document.querySelector('button')
btnEl.addEventListener('click', removeUnimportantEls )
