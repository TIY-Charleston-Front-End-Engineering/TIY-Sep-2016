//-----------------------------------------
// encodeURL()
//   URLs can only be sent using an ASCII character set
//   When formatting a URL, certain characters like spaces, quote marks
//   and parentheses must be replaced with a '%' and two letters/numbers
//
//   For example: the string : 'how are you'
//   would be URL encoded to : 'how%20are%20you'
//
//   Take a string and build a URL encoder for it

//
//   %20 - space
//   %21 - !
//   %22 - "
//   %24 - $
//   %27 - '
//
//------------------------------------------

//INPUT: string
var encodeURL = function(str){

   var encodingMap = {
      " " : "%20",
      "!" : "%21",
      '"' : "%22",
      '$' : "%24",
      "'" : "%27"
   }

   var encodedStrBuilder = ''

   for(var i = 0; i < str.length; i+=1 ){
      var currentChar = str[i]

      if( typeof encodingMap[currentChar] === 'undefined' ) {
         // console.log(str[i])
         encodedStrBuilder += str[i]
      } else {
         // console.log("~~~~~~~~~~~~")
         encodedStrBuilder += encodingMap[currentChar]
      }
   }

   console.log(encodedStrBuilder)
   return encodedStrBuilder
   //OUTPUT: modified String (w/ encoded chars)
}

var encodedURL_1 = encodeURL('this is great')
console.assert(encodedURL_1 === 'this%20is%20great')
//
var encodedURL_2 = encodeURL('she said "there is no need for violence!"')
console.assert(encodedURL_2 === 'she%20said%20%22there%20is%20no%20need%20for%20violence%21%22')
//
var encodedURL_3 = encodeURL("i'm all about the $")
console.assert(encodedURL_3 === "i%27m%20all%20about%20the%20%24")


//------------------------------------------
// finish early? build a decodeURL() function!
// decodeURL()

// var decoded_url = decodeURL('i%27m%20all%20about%20the%20%24')
// console.assert(decoded_url === "i'm all about the $")

// var decoded_url2 = decodeURL('she%20said%20%22there%20is%20no%20need%20for%20violence%21%22')
// console.assert(decoded_url2 === 'she said "there is no need for violence!"')
