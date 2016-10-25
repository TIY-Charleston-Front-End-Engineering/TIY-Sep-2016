var HomeView = Backbone.View.extend({
   //
   el: '.content-area',

   events : {
      'click .get-country-btn' : 'putInputValInHash'
   },

   putInputValInHash: function(evt){
      console.log(evt, evt.target)
      var inputEl = document.querySelector('#country-name')
      window.location.hash = 'show-country/' + inputEl.value
      inputEl.value = ''
   },

   _buildHTMLTemplate: function(){
      var bigStr = "<h1> Search for a country </h1>"
      bigStr += "<input type='text' class='form-control' id='country-name'>"
      bigStr += "<button class='btn btn-primary get-country-btn'>Get Country Info</button>"

      return bigStr
   },

   render: function(){
      // console.log(this._buildHTMLTemplate() )
      this.el.innerHTML = this._buildHTMLTemplate()
      return this
   }
})

var SingleCountryView = Backbone.View.extend({

   el: '.content-area',

   _buildHTMLTemplate: function(countryModel){
      var countryShortName = countryModel.get('altSpellings')[0].toLowerCase()
      var bigStr = '<div class="row">'
      bigStr +=    '<div class="col-sm-offset-2 col-sm-4">'
      bigStr +=       '<h1>'+ countryModel.get('name')+ '</h1>'
      bigStr +=       '<img alt="Flag of Canada" src="https://flags.fmcdn.net/data/flags/big/'+ countryShortName +'.png">'
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
   },

   render: function(mod){
      // console.log(this._buildHTMLTemplate() )
      console.log(mod)
      console.log(this)
      this.el.innerHTML = this._buildHTMLTemplate(mod)
      return this
   }
})

var CountriesTableView = Backbone.View.extend({
   el: '.content-area',

   // (2c) Receiving a collection to create an HTML string
   _buildHTMLTemplate: function(countryColl){
      var bigHTMLStr = ''
      bigHTMLStr += '<div class="container">'

      bigHTMLStr += '<table class="table">'
      bigHTMLStr +=    '<thead>'
      bigHTMLStr +=       '<tr>'
      bigHTMLStr +=          '<th>&nbps;</th>'
      bigHTMLStr +=          '<th>Country</th>'
      bigHTMLStr +=          '<th>Regton</th>'
      bigHTMLStr +=          '<th>Subregion</th>'
      bigHTMLStr +=       '</tr>'
      bigHTMLStr +=    '</thead>'
      bigHTMLStr +=    '<tbody>'

      countryColl.models.forEach(function(ctryModel){
         console.log(ctryModel)
         if( ['PS', 'HK', 'MO'].indexOf(ctryModel.get('altSpellings')[0]) < 0  ) {
            var imgLink = 'https://flags.fmcdn.net/data/flags/big/'+ctryModel.get('altSpellings')[0].toLowerCase()+'.png'
         } else {
            var imgLink = "http://www.elizabethan-era.org.uk/images/calico-jack-rackhams-pirate-flag.jpg"
         }

         bigHTMLStr += '<tr>'
         bigHTMLStr +=    '<td>'+'<img alt="Flag of Wherever" src="'+ imgLink +'" width="80" height="60"/></td>'
         bigHTMLStr +=    '<td>'+ctryModel.get('name')+'</td>'
         bigHTMLStr +=    '<td>'+ctryModel.get('region')+'</td>'
         bigHTMLStr +=    '<td>'+ctryModel.get('subregion')+'</td>'
         bigHTMLStr += '</tr>'
      })

      bigHTMLStr +=    '</tbody>'

      bigHTMLStr +=     '</table>'

      bigHTMLStr += '</div>'

      return bigHTMLStr
   },


   // (2b) Passing Values to .collection to ._buildHTMLTemplate()
   //      for compiling HTML
   render: function(coll){

      console.log(this)
      this.el.innerHTML = this._buildHTMLTemplate(coll)
      return this
   }
})
