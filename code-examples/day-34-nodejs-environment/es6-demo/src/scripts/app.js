//=================================
// TEMPLATE STRING LITERALS
//=================================
var authorName = "Jimmy"

var genAuthImg = function(val){
	return "https://robohash.org/" + val
}

// multiline w/ the backticks (`... `)
// ${...} will escape and allow us to inject javascript
var htmlStr = `
	<h3>Hi my name is ${authorName} </h3>
	<p> <img src="${ genAuthImg(authorName)}"> </p>
`

document.querySelector('#app-container').innerHTML = htmlStr

//=================================
// FUNCTION DEFAULT PARAMETERS
//=================================
var sum = function(x=0, y=0){
	// no need for this jazz...
	// if(typeof x === 'undefined')  x = 0
	// if(typeof y === 'undefined')  y = 0

	return x + y
}

console.log( sum() )
console.log( sum(10, 30) )


//=================================
// REST PARAMETERS (convert function arguments into an array)
//=================================
var printCategoryAndSubCatList = function(category, ...argsArray){
	console.log(category)
	console.log("-------------")
	argsArray.forEach(function(argStr){
		console.log(argStr)
	})
}

printCategoryAndSubCatList('living-expenses', 'rent', 'utilities', 'water', 'internet')

console.log('=========\n\n')

//=================================
// DESTRUCTURING (pull out pieces of object or array)
//=================================

var greetingServiceObj = {
	url: "https://myjson.com/greetings",
	sayHi: function( name ){ console.log(`Hey there ${name}`)},
	sayBye: function( name ){ console.log(`Adios ${name}!`)},
	about: function(){ console.log(`i greet people and things`)},
	sayGoodMorningUK: function(name){ console.log(`Top of the morning, ${name}!`) },
}

var {sayHi, sayBye} = greetingServiceObj
sayHi("Rufus")
sayBye("Sherry")

var namesList =['Jimmy Dreyfus', 'Sally Tamale', 'Baby Shampoo', 'Max Municpal']
var [name1, ...name2] = namesList
console.log(name1)
console.log(name2)


//=================================
// SPREAD OPERATORS (takes an array and 'spreads' it into commma separated values)
//=================================

var bigColl = ['shana', 'nikki', 'sheila', 'tammy']
var smallColl = ['katy', 'tanya']

var joinedColl = [...bigColl, ...smallColl]
console.log(joinedColl)

//=================================
// New lexical bindings
//=================================
// var bye = 'so sad'

const cantReasiignMe = "HAHAHAHA"
let whoWins = "Paul"

if (true){
	//legal
	// cantReasiignMe = "Trying so hard"
	// console.log(cantReasiignMe)

	console.log(whoWins)
	let doIwin = "am i a winner?"
}

console.log(whoWins)
console.log(doIwin) // do i win? nope

// not allowed
// const cantReasiignMe = "so sorry"
