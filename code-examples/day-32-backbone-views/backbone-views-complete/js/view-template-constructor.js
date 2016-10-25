
var ViewTemplate = Backbone.View.extend({
   el: '.content-area',

   _buildHTMLTemplate : function(){
      return ''
   },

   render : function(data){
      console.log(this)
      this.el.innerHTML = this._buildHTMLTemplate(data)
      return this
   },

   initialize: function(templateFn){
      this._buildHTMLTemplate = templateFn
   }

})

var HomeView = ViewTemplate.extend({
   events : {
       // «event» + «classname» :  «event-handler-method»
      'click .get-country-btn' : 'putInputValInHash'
   },

   putInputValInHash: function(evt){
      console.log(evt, evt.target)
      var inputEl = document.querySelector('#country-name-input')
      window.location.hash = 'show-country/' + inputEl.value
      inputEl.value = ''
   },
})


var homePageTemplateFn = function(){

   var bigStr = "<h1> Search for a country </h1>"
       bigStr += "<input type='text' class='form-control' id='country-name-input'>"
       bigStr += "<button class='btn btn-primary get-country-btn'>Get Country Info</button>"

   return bigStr
}

var showSingleCountryTempl = function(countryModel){
   var countryShortName = countryModel.get('altSpellings')[0].toLowerCase()
   var bigStr = '<div class="row">'
   bigStr +=    '<div class="col-sm-offset-2 col-sm-4">'
   bigStr +=       '<h1>'+ countryModel.get('name')+ '</h1>'
   bigStr +=       '<img class="main-flag" alt="Flag of Canada" src="https://flags.fmcdn.net/data/flags/big/'+ countryShortName +'.png">'
   bigStr +=       '<h5>Native name: <em>'+countryModel.get('nativeName')+'</em></h5>'
   bigStr +=    '</div>'
   bigStr +=    '<div class="col-sm-4 country-profile">'
   bigStr +=       '<h1>&nbsp;</h1>'
   bigStr +=       '<h4>Capital: </h4>'
   bigStr +=       '<p>' + countryModel.get('capital') + '</p>'
   bigStr +=       '<h4> Population:</h4>'
   bigStr +=       '<p>' + countryModel.get('population') + '</p>'
   bigStr +=       '<h4>Currencies:</h4>'
   bigStr +=       '<ul>'
   bigStr +=          countryModel.get('currencies')
                        .map(function(curr){ return '<li>' + curr + '</li>'  })
                        .join('')
   bigStr +=       '</ul>'
   bigStr +=       '<h4>Borders:</h4>'
   bigStr +=       '<ul>'
   bigStr +=          countryModel.get('borders')
                        .map(function(border){ return '<li>' + border + '</li>'  })
                        .join('')
   bigStr +=       '</ul>'
   bigStr +=    '</div>'
   bigStr += '</div>'

   return bigStr
}

var navViewTemplateFn = function(){
   var htmlStr = ['asia', 'africa', 'europe', 'americas'].map(function(ctryStr){
         return '<a class="btn btn-warning" href="#show-region/'+ctryStr+'">' + ctryStr + '</a> | '
      }).join('')

   return htmlStr
}

var countriesTableViewFn = function(countryColl){
   var bigHTMLStr = ''
   bigHTMLStr += '<div class="container">'

   bigHTMLStr += '<table class="table">'
   bigHTMLStr +=    '<thead>'
   bigHTMLStr +=       '<tr>'
   bigHTMLStr +=          '<th>&nbps;</th>'
   bigHTMLStr +=          '<th>Country</th>'
   bigHTMLStr +=          '<th>Region</th>'
   bigHTMLStr +=          '<th>Subregion</th>'
   bigHTMLStr +=       '</tr>'
   bigHTMLStr +=    '</thead>'
   bigHTMLStr +=    '<tbody>'

   countryColl.models.forEach(function(ctryModel){
      bigHTMLStr += '<tr>'
      bigHTMLStr +=    '<td>'+'<img alt="Flag of Canada" src="https://flags.fmcdn.net/data/flags/big/'+ctryModel.get('altSpellings')[0].toLowerCase()+'.png" width="80" height="60"/></td>'
      bigHTMLStr +=    '<td>'+ctryModel.get('name')+'</td>'
      bigHTMLStr +=    '<td>'+ctryModel.get('region')+'</td>'
      bigHTMLStr +=    '<td>'+ctryModel.get('subregion')+'</td>'
      bigHTMLStr += '</tr>'
   })

   bigHTMLStr +=    '</tbody>'

   bigHTMLStr +=     '</table>'

   bigHTMLStr += '</div>'
   return bigHTMLStr
}
