
var ViewTemplateConstructor = function(domElSelector , htmlTemplFunction){
   this.domEl = domElSelector

   this.buildHTMLTemplate = htmlTemplFunction

   this.render = function(data){
      var tgtEl = document.querySelector(this.domEl)
      tgtEl.innerHTML = this.buildHTMLTemplate(data)
   }
}

var showNavBar = function(routes){

}

var showSingleCountry = function(singleCountry){

}

var showCountryTable = function(countryColl){
   var bigHTMLStr = ''
   bigHTMLStr += '<div class="container">'

   bigHTMLStr += '<table class="table">'
   bigHTMLStr +=    '<thead>'
   bigHTMLStr +=       '<tr>'
   bigHTMLStr +=          '<th>Cackler</th>'
   bigHTMLStr +=          '<th>Cackle Cause</th>'
   bigHTMLStr +=          '<th class="text-center">Rating</th>'
   bigHTMLStr +=          '<th>Time</th>'
   bigHTMLStr +=       '</tr>'
   bigHTMLStr +=    '</thead>'
   bigHTMLStr +=    '<tbody>'

   forEach(countryArr, function(cackleRecord){
      bigHTMLStr += '<tr>'
      bigHTMLStr +=    '<td>''</td>'
      bigHTMLStr +=    '<td>''</td>'
      bigHTMLStr +=    '<td class="text-center"><i class="fa fa-star fa-'+cackleRecord.rating+'x text-warning" aria-hidden="true"></i></td>'
      bigHTMLStr +=    '<td>''</td>'
      bigHTMLStr += '</tr>'
   })

   bigHTMLStr +=    '</tbody>'

   bigHTMLStr +=     '</table>'

   bigHTMLStr += '</div>'

   document.querySelector('#app-container').innerHTML = bigHTMLStr
}
