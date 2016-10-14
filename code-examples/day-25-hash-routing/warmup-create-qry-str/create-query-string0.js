//INPUT: Object (of simple key value pairs)
var createQueryStr = function(obj){
   var queryString = ''
   var isFirst = true
   for (var propKey in obj){
      var valueForProp =  obj[propKey]
      // console.log(propKey, "-", valueForProp )
      queryString += "&" + propKey + "=" + valueForProp
      // console.log(queryString)
   }

   var slicedString = queryString.slice(1)
   console.log(slicedString)
   //OUTPUT: String
   return slicedString
}
var obj1 = {
    state: 'SC',
    apikey: '12345',
    chamber: 'house' //'House'
}

var queryString1 = createQueryStr(obj1)
// => "state=SC&apikey=12345&chamber=house"

console.assert(queryString1 === "state=SC&apikey=12345&chamber=house")


var obj2 ={
    category: 'comedy',
    allAudiences: true,
    maxMinutes: 180,
    minMinutes: 45
}

var queryString2 = createQueryStr(obj2)
// => "category=comedy&allAudiences=true&maxMinutes=180&minMinutes=45"
console.assert(queryString2 === "category=comedy&allAudiences=true&maxMinutes=180&minMinutes=45")
