var HomeView = Backbone.View.extend({
   //(1a) - SETUP
   el: '.content-area',

   //(2) - Events
   events : {
       // «event» + «classname» :  «event-handler-method»
      'click .get-country-btn' : 'putInputValInHash'
   },


   putInputValInHash: function(evt){
      console.log(evt, evt.target)
      var inputEl = document.querySelector('#country-name')
      window.location.hash = 'show-country/' + inputEl.value
      inputEl.value = ''
   },

   // (1C) - SETUP: Template compiler
   _buildHTMLTemplate: function(){
      var bigStr = "<h1> Search for a country </h1>"
      bigStr += "<input type='text' class='form-control' id='country-name'>"
      bigStr += "<button class='btn btn-primary get-country-btn'>Get Country Info</button>"

      return bigStr
   },

   //(1B) - SETUP
   render: function(){
      // (1D) - Will put the html on the page
      this.el.innerHTML = this._buildHTMLTemplate()
      return this
   }
})
