

// A
//---
//(1) select dom element that receives event (the listening element)
var alertBtnEl = document.querySelector('.pop-alert')

//(2) declare what will happen (the event-handler function)
var popAlert = function(){
   alert('why hello')
}
//(3) add the event listener to the element that will receive the event,
//     « elemenet ».addEventListener( «evt-type» , « event-handler function » )
alertBtnEl.addEventListener('click',popAlert)

//==============

// B : using the event-handler function to modify another element
//---
var writeBtn = document.querySelector('.write-btn')
var writeSomething = function(){
   // it all happens here...
   var el = document.querySelector('.top.right')
   el.innerHTML = '<h3>This appeared from clicking <code>button.write-btn</code> elsewhere</h3>'
}
writeBtn.addEventListener('click', writeSomething)



//==============

// C : evt.target to *dynamically select* and then modify
//     the element where the event happened
//---
var doItBtn = document.querySelector('.do-it-btn')
var h2El = document.querySelector('.yo-h2')

var modifyClickedElement = function(evt){
   console.log(evt.target)
   evt.target.classList.add('urgent')
}

doItBtn.addEventListener('click', modifyClickedElement)
h2El.addEventListener('click', modifyClickedElement)
