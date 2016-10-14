//NOTE: We access the hash value with `window.location.hash`

var factsContainerEl = document.querySelector('#app-container')

var funFactObj = {
   chip: {funFact: "Chip is not my real name", fullName: "Chip Cracraft"},
   justin: {funFact: "I can draw «arms outstretched»", fullName: "Justin Cooper"},
   chad: {funFact: "Wingspan is 6\'6\"", fullName: "Chad Haselden"},
   bubba: {funFact: "Born in Vancouver, Canada", fullName: "Bubba Lechim&minenant"}
}

var hashChangeHandler = function(){
   // if window.location.hash === '#', then return the homePage
   if(window.location.hash.length === 0) {
      var homePageStr = '<h1>Bios</h1>'
         homePageStr += '<a href="#chad" class="btn btn-info btn-lg">Chad</a>'
         homePageStr += '<a href="#justin" class="btn btn-info btn-lg">Justin</a>'
         homePageStr += '<a href="#chip" class="btn btn-info btn-lg">Chip</a>'
         homePageStr += '<a href="#bubba" class="btn btn-info btn-lg">Bubba</a>'

      return factsContainerEl.innerHTML = homePageStr
   }

   console.log(window.location.hash  )
   var bioInUrlHash = window.location.hash
   // value is sth like: '#chad'

   var selectedBio = bioInUrlHash.slice(1 )
   //value is now 'chad'

   console.log( funFactObj[selectedBio] )
   //we can access the funFactObject ^^ dynamically
   var bigHTMLString = ''
   bigHTMLString += '<img src="https://flathash.com/' + selectedBio + '"/>'
   bigHTMLString += "<h3>" + funFactObj[selectedBio].fullName + "</h3>"
   bigHTMLString += "<p>" + funFactObj[selectedBio].funFact + "</p>"

   factsContainerEl.innerHTML = bigHTMLString
}



// this tells our page to listen for *changes* in the hash
window.addEventListener('hashchange', hashChangeHandler)

















//
