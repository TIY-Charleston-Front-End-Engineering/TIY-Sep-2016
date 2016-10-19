console.log('wired up!')
var jsMonth = function(normalMonth){ return normalMonth - 1}

// string literal
var userStr = 'Jordan Wicker'

// string constructor
var stringInstance = new String('well thats nice')

// console.log(stringInstance)


// array literal
var someArr = [1, 2, 3, 44, 'hey']

// array constructor
var arrayInstance = new Array(5,6,77,"nice")
// console.log(arrayInstance)


var dateInstance = new Date()
var myBurfDayDateObj = new Date(2017, jsMonth(8), 5 )

console.log([dateInstance])

var currentYear = dateInstance.getFullYear()
var currentHour = dateInstance.getHours()
var currentMinute = dateInstance.getMinutes()

console.log('the current year: ', currentYear)
console.log(currentHour, " : ", currentMinute)

var hrSpanEl = document.querySelector('.now-hour')
var minSpanEl = document.querySelector('.now-minute')
var greetingEl = document.querySelector('.greeting-msg')
var burfDayEl = document.querySelector('.burfday')

hrSpanEl.innerHTML = currentHour
minSpanEl.innerHTML = currentMinute

var makeGreeting = function(usr, hr){

   var approximateTOD

   if ( hr < 12 ){
      approximateTOD = "morning"
   } else if ( hr < 19) {
      approximateTOD = "afternoon"
   } else {
      approximateTOD = "evening"
   }

   var greetingsMessages = {
      morning: "Top of the morning, ",
      afternoon: "Buenas tardes, ",
      evening: "Good evening, "
   }

   greetingEl.innerHTML = greetingsMessages[approximateTOD] + usr
}

makeGreeting(userStr, currentHour)




var burfDayDate = myBurfDayDateObj.getDate()
var burfDayMonth = myBurfDayDateObj.getMonth()
var burfDayDayOfWeek = myBurfDayDateObj.getDay()

console.log("bday", burfDayDate, burfDayMonth, burfDayDayOfWeek )

var makeBdayReminder = function(numDate, numMonth, dayOfWeek ){

   var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]
   var monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

   burfDayEl.innerHTML = daysOfWeek[dayOfWeek] + ', ' + monthsOfYear[numMonth] + " " + numDate

}

makeBdayReminder(burfDayDate, burfDayMonth, burfDayDayOfWeek)


















//
