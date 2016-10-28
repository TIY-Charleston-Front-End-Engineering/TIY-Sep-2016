(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

//=================================
// TEMPLATE STRING LITERALS
//=================================

var authorName = "Jimmy";

var genAuthImg = function genAuthImg(val) {
	return "https://robohash.org/" + val;
};

// multiline w/ the backticks (`... `)
// ${...} will escape and allow us to inject javascript
var htmlStr = "\n\t<h3>Hi my name is " + authorName + " </h3>\n\t<p> <img src=\"" + genAuthImg(authorName) + "\"> </p>\n";

document.querySelector('#app-container').innerHTML = htmlStr;

//=================================
// FUNCTION DEFAULT PARAMETERS
//=================================
var sum = function sum() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	// no need for this jazz...
	// if(typeof x === 'undefined')  x = 0
	// if(typeof y === 'undefined')  y = 0

	return x + y;
};

console.log(sum());
console.log(sum(10, 30));

//=================================
// REST PARAMETERS (convert function arguments into an array)
//=================================
var printCategoryAndSubCatList = function printCategoryAndSubCatList(category) {
	console.log(category);
	console.log("-------------");

	for (var _len = arguments.length, argsArray = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		argsArray[_key - 1] = arguments[_key];
	}

	argsArray.forEach(function (argStr) {
		console.log(argStr);
	});
};

printCategoryAndSubCatList('living-expenses', 'rent', 'utilities', 'water', 'internet');

console.log('=========\n\n');

//=================================
// DESTRUCTURING (pull out pieces of object or array)
//=================================

var greetingServiceObj = {
	url: "https://myjson.com/greetings",
	sayHi: function sayHi(name) {
		console.log("Hey there " + name);
	},
	sayBye: function sayBye(name) {
		console.log("Adios " + name + "!");
	},
	about: function about() {
		console.log("i greet people and things");
	},
	sayGoodMorningUK: function sayGoodMorningUK(name) {
		console.log("Top of the morning, " + name + "!");
	}
};

var sayHi = greetingServiceObj.sayHi,
    sayBye = greetingServiceObj.sayBye;

sayHi("Rufus");
sayBye("Sherry");

var namesList = ['Jimmy Dreyfus', 'Sally Tamale', 'Baby Shampoo', 'Max Municpal'];
var name1 = namesList[0],
    name2 = namesList.slice(1);

console.log(name1);
console.log(name2);

//=================================
// SPREAD OPERATORS (takes an array and 'spreads' it into commma separated values)
//=================================

var bigColl = ['shana', 'nikki', 'sheila', 'tammy'];
var smallColl = ['katy', 'tanya'];

var joinedColl = [].concat(bigColl, smallColl);
console.log(joinedColl);

//=================================
// New lexical bindings
//=================================
// var bye = 'so sad'

var cantReasiignMe = "HAHAHAHA";
var whoWins = "Paul";

if (true) {
	//legal
	// cantReasiignMe = "Trying so hard"
	// console.log(cantReasiignMe)

	console.log(whoWins);
	var _doIwin = "am i a winner?";
}

console.log(whoWins);
console.log(doIwin); // do i win? nope

// not allowed
// const cantReasiignMe = "so sorry"

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJLGFBQUosQUFBaUI7O0FBRWpCLElBQUksYUFBYSxTQUFiLEFBQWEsV0FBQSxBQUFTLEtBQUksQUFDN0I7UUFBTywwQkFBUCxBQUFpQyxBQUNqQztBQUZEOztBQUlBO0FBQ0E7QUFDQSxJQUFJLHFDQUFBLEFBQ2lCLDJDQUNILFdBRmQsQUFFYyxBQUFXLGNBRjdCOztBQUtBLFNBQUEsQUFBUyxjQUFULEFBQXVCLGtCQUF2QixBQUF5QyxZQUF6QyxBQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxNQUFNLFNBQU4sQUFBTSxNQUFrQjtLQUFULEFBQVMsd0VBQVAsQUFBTztLQUFKLEFBQUksd0VBQUYsQUFBRSxBQUMzQjs7QUFDQTtBQUNBO0FBRUE7O1FBQU8sSUFBUCxBQUFXLEFBQ1g7QUFORDs7QUFRQSxRQUFBLEFBQVEsSUFBUixBQUFhO0FBQ2IsUUFBQSxBQUFRLElBQUssSUFBQSxBQUFJLElBQWpCLEFBQWEsQUFBUTs7QUFHckI7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2QkFBNkIsU0FBN0IsQUFBNkIsMkJBQUEsQUFBUyxVQUF1QixBQUNoRTtTQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7U0FBQSxBQUFRLElBRndELEFBRWhFLEFBQVk7O21DQUYwQyxBQUFVLDJFQUFWO0FBQVUsa0NBQUE7QUFHaEU7O1dBQUEsQUFBVSxRQUFRLFVBQUEsQUFBUyxRQUFPLEFBQ2pDO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtBQUZELEFBR0E7QUFORDs7QUFRQSwyQkFBQSxBQUEyQixtQkFBM0IsQUFBOEMsUUFBOUMsQUFBc0QsYUFBdEQsQUFBbUUsU0FBbkUsQUFBNEU7O0FBRTVFLFFBQUEsQUFBUSxJQUFSLEFBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBLElBQUk7TUFBcUIsQUFDbkIsQUFDTDtRQUFPLGVBQUEsQUFBVSxNQUFNLEFBQUU7VUFBQSxBQUFRLG1CQUFSLEFBQXlCLEFBQVE7QUFGbEMsQUFHeEI7U0FBUSxnQkFBQSxBQUFVLE1BQU0sQUFBRTtVQUFBLEFBQVEsZUFBUixBQUFxQixPQUFTO0FBSGhDLEFBSXhCO1FBQU8saUJBQVUsQUFBRTtVQUFBLEFBQVEsSUFBaUM7QUFKcEMsQUFLeEI7bUJBQWtCLDBCQUFBLEFBQVMsTUFBSyxBQUFFO1VBQUEsQUFBUSw2QkFBUixBQUFtQyxPQUFVO0FBTGhGLEFBQXlCO0FBQUEsQUFDeEI7O0ksQUFPSSxRLEFBQWlCLG1CLEFBQWpCO0ksQUFBTyxTLEFBQVUsbUIsQUFBVjs7QUFDWixNQUFBLEFBQU07QUFDTixPQUFBLEFBQU87O0FBRVAsSUFBSSxZQUFXLENBQUEsQUFBQyxpQkFBRCxBQUFrQixnQkFBbEIsQUFBa0MsZ0JBQWpELEFBQWUsQUFBa0Q7SSxBQUM1RCxRLEFBQW1CO0ksQUFBVCxRLEFBQVM7O0FBQ3hCLFFBQUEsQUFBUSxJQUFSLEFBQVk7QUFDWixRQUFBLEFBQVEsSUFBUixBQUFZOztBQUdaO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLFVBQVUsQ0FBQSxBQUFDLFNBQUQsQUFBVSxTQUFWLEFBQW1CLFVBQWpDLEFBQWMsQUFBNkI7QUFDM0MsSUFBSSxZQUFZLENBQUEsQUFBQyxRQUFqQixBQUFnQixBQUFTOztBQUV6QixJQUFJLHVCQUFBLEFBQWlCLFNBQXJCLEFBQUksQUFBNkI7QUFDakMsUUFBQSxBQUFRLElBQVIsQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNLGlCQUFOLEFBQXVCO0FBQ3ZCLElBQUksVUFBSixBQUFjOztBQUVkLElBQUEsQUFBSSxNQUFLLEFBQ1I7QUFDQTtBQUNBO0FBRUE7O1NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtLQUFJLFVBQUosQUFBYSxBQUNiOzs7QUFFRCxRQUFBLEFBQVEsSUFBUixBQUFZO0FBQ1osUUFBQSxBQUFRLEksQUFBUixBQUFZLFNBQVE7O0FBRXBCO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRFTVBMQVRFIFNUUklORyBMSVRFUkFMU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBhdXRob3JOYW1lID0gXCJKaW1teVwiXG5cbnZhciBnZW5BdXRoSW1nID0gZnVuY3Rpb24odmFsKXtcblx0cmV0dXJuIFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvXCIgKyB2YWxcbn1cblxuLy8gbXVsdGlsaW5lIHcvIHRoZSBiYWNrdGlja3MgKGAuLi4gYClcbi8vICR7Li4ufSB3aWxsIGVzY2FwZSBhbmQgYWxsb3cgdXMgdG8gaW5qZWN0IGphdmFzY3JpcHRcbnZhciBodG1sU3RyID0gYFxuXHQ8aDM+SGkgbXkgbmFtZSBpcyAke2F1dGhvck5hbWV9IDwvaDM+XG5cdDxwPiA8aW1nIHNyYz1cIiR7IGdlbkF1dGhJbWcoYXV0aG9yTmFtZSl9XCI+IDwvcD5cbmBcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250YWluZXInKS5pbm5lckhUTUwgPSBodG1sU3RyXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGVU5DVElPTiBERUZBVUxUIFBBUkFNRVRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgc3VtID0gZnVuY3Rpb24oeD0wLCB5PTApe1xuXHQvLyBubyBuZWVkIGZvciB0aGlzIGphenouLi5cblx0Ly8gaWYodHlwZW9mIHggPT09ICd1bmRlZmluZWQnKSAgeCA9IDBcblx0Ly8gaWYodHlwZW9mIHkgPT09ICd1bmRlZmluZWQnKSAgeSA9IDBcblxuXHRyZXR1cm4geCArIHlcbn1cblxuY29uc29sZS5sb2coIHN1bSgpIClcbmNvbnNvbGUubG9nKCBzdW0oMTAsIDMwKSApXG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1QgUEFSQU1FVEVSUyAoY29udmVydCBmdW5jdGlvbiBhcmd1bWVudHMgaW50byBhbiBhcnJheSlcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcHJpbnRDYXRlZ29yeUFuZFN1YkNhdExpc3QgPSBmdW5jdGlvbihjYXRlZ29yeSwgLi4uYXJnc0FycmF5KXtcblx0Y29uc29sZS5sb2coY2F0ZWdvcnkpXG5cdGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLVwiKVxuXHRhcmdzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihhcmdTdHIpe1xuXHRcdGNvbnNvbGUubG9nKGFyZ1N0cilcblx0fSlcbn1cblxucHJpbnRDYXRlZ29yeUFuZFN1YkNhdExpc3QoJ2xpdmluZy1leHBlbnNlcycsICdyZW50JywgJ3V0aWxpdGllcycsICd3YXRlcicsICdpbnRlcm5ldCcpXG5cbmNvbnNvbGUubG9nKCc9PT09PT09PT1cXG5cXG4nKVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gREVTVFJVQ1RVUklORyAocHVsbCBvdXQgcGllY2VzIG9mIG9iamVjdCBvciBhcnJheSlcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBncmVldGluZ1NlcnZpY2VPYmogPSB7XG5cdHVybDogXCJodHRwczovL215anNvbi5jb20vZ3JlZXRpbmdzXCIsXG5cdHNheUhpOiBmdW5jdGlvbiggbmFtZSApeyBjb25zb2xlLmxvZyhgSGV5IHRoZXJlICR7bmFtZX1gKX0sXG5cdHNheUJ5ZTogZnVuY3Rpb24oIG5hbWUgKXsgY29uc29sZS5sb2coYEFkaW9zICR7bmFtZX0hYCl9LFxuXHRhYm91dDogZnVuY3Rpb24oKXsgY29uc29sZS5sb2coYGkgZ3JlZXQgcGVvcGxlIGFuZCB0aGluZ3NgKX0sXG5cdHNheUdvb2RNb3JuaW5nVUs6IGZ1bmN0aW9uKG5hbWUpeyBjb25zb2xlLmxvZyhgVG9wIG9mIHRoZSBtb3JuaW5nLCAke25hbWV9IWApIH0sXG59XG5cbnZhciB7c2F5SGksIHNheUJ5ZX0gPSBncmVldGluZ1NlcnZpY2VPYmpcbnNheUhpKFwiUnVmdXNcIilcbnNheUJ5ZShcIlNoZXJyeVwiKVxuXG52YXIgbmFtZXNMaXN0ID1bJ0ppbW15IERyZXlmdXMnLCAnU2FsbHkgVGFtYWxlJywgJ0JhYnkgU2hhbXBvbycsICdNYXggTXVuaWNwYWwnXVxudmFyIFtuYW1lMSwgLi4ubmFtZTJdID0gbmFtZXNMaXN0XG5jb25zb2xlLmxvZyhuYW1lMSlcbmNvbnNvbGUubG9nKG5hbWUyKVxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTUFJFQUQgT1BFUkFUT1JTICh0YWtlcyBhbiBhcnJheSBhbmQgJ3NwcmVhZHMnIGl0IGludG8gY29tbW1hIHNlcGFyYXRlZCB2YWx1ZXMpXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgYmlnQ29sbCA9IFsnc2hhbmEnLCAnbmlra2knLCAnc2hlaWxhJywgJ3RhbW15J11cbnZhciBzbWFsbENvbGwgPSBbJ2thdHknLCAndGFueWEnXVxuXG52YXIgam9pbmVkQ29sbCA9IFsuLi5iaWdDb2xsLCAuLi5zbWFsbENvbGxdXG5jb25zb2xlLmxvZyhqb2luZWRDb2xsKVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTmV3IGxleGljYWwgYmluZGluZ3Ncbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyB2YXIgYnllID0gJ3NvIHNhZCdcblxuY29uc3QgY2FudFJlYXNpaWduTWUgPSBcIkhBSEFIQUhBXCJcbmxldCB3aG9XaW5zID0gXCJQYXVsXCJcblxuaWYgKHRydWUpe1xuXHQvL2xlZ2FsXG5cdC8vIGNhbnRSZWFzaWlnbk1lID0gXCJUcnlpbmcgc28gaGFyZFwiXG5cdC8vIGNvbnNvbGUubG9nKGNhbnRSZWFzaWlnbk1lKVxuXG5cdGNvbnNvbGUubG9nKHdob1dpbnMpXG5cdGxldCBkb0l3aW4gPSBcImFtIGkgYSB3aW5uZXI/XCJcbn1cblxuY29uc29sZS5sb2cod2hvV2lucylcbmNvbnNvbGUubG9nKGRvSXdpbikgLy8gZG8gaSB3aW4/IG5vcGVcblxuLy8gbm90IGFsbG93ZWRcbi8vIGNvbnN0IGNhbnRSZWFzaWlnbk1lID0gXCJzbyBzb3JyeVwiXG4iXX0=
