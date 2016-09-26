https://goo.gl/Iw2Q9F


// JS DATATYPES
//======================

// (1) strings
// -----------------
"helloooo"
'wat is that'
"Sherry's Berries"

// (2) numbers
// -----------------
23
31.22
-33
0

//(3) booleans
// -----------------
true
false

// JS Variables
//======================
// string assignment to variable
var aGretmg = "Hey how are u"

// result of math operation in variables
var whatHappens = 99 - 10

// reassigning variables
whatHappens = "now streengy" // --->


// FUNCTIONS
//======================
// 1) the declaration/assignment
var calcMeal = function (menuPrice){
    var foodTax = .10;
    var tipPct  = .17;
    var totalVal = (menuPrice * (1 + foodTax)) * ( 1 + tipPct)
    return totalVal
}

// 2) the execution
var totalMealCost1 = calcMeal(20)
var totalMealCost2 = calcMeal(40)
var totalMealCost3 = calcMeal(50)

// 3) logging the output
log('\n\n...totalMealCost1...')
log(totalMealCost1)

log('\n\n...totalMealCost2...')
log(totalMealCost2)

log('\n\n...totalMealCost3...')
log(totalMealCost3)
