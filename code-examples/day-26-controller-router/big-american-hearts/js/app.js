console.log('wired up!')

var fetchAndRenderHeartsData = function(stateInput){
   $.getJSON("http://capitolwords.org/api/1/dates.json?phrase=love&percentages=true&granularity=year&apikey=7ba96d266cc84b168fab4d878d9aa141&state="+stateInput)
      .then( function(returnData){
          console.log(returnData)

          var leftColStr = '<h2 class="bg-danger">Annual <span class="text-danger">Love</span> Count in <u class="bg-warning">'+ stateInput +'</u></h2>'

          forEach(returnData.results, function(eachResult){
               leftColStr  += "<h4>" + eachResult.year + "---- <span class='text-danger'>" + eachResult.count +"</span></h4>"
               leftColStr  += "<p class='text-danger'>"

               for(var i = 0; i < eachResult.count; i++){
                   leftColStr += "<i class='fa fa-2x fa-heart'></i> "
               }

               leftColStr  += "<br/><br/></p>"


          })

          loveCountEl.innerHTML = leftColStr

       })
}

var fetchAndRenderLegislatorData = function(stateInput){
   $.getJSON("https://congress.api.sunlightfoundation.com/legislators?apikey=7ba96d266cc84b168fab4d878d9aa141&state="+stateInput) // Promise
         .then( function( returnData ){
            //Inspecting the returned data
            // console.log(returnData)

            var rightColHTMLStr = '<h2 class="bg-success">Legislators</h2>'

            forEach(returnData.results, function(congressPersonResult){
               // console.log(congressPersonResult)
               rightColHTMLStr +=  '<div class="media">'
               rightColHTMLStr +=  '<div class="media-left">'
               rightColHTMLStr +=     '<img class="media-object" src="http://graph.facebook.com/' + congressPersonResult.facebook_id + '/picture?type=normal" alt="...">'

               rightColHTMLStr +=   '</div>'
               rightColHTMLStr +=   '<div class="media-body">'
               rightColHTMLStr +=      '<h4 class="media-heading">' + congressPersonResult.first_name + " " + congressPersonResult.last_name + '</h4>'

               rightColHTMLStr +=      '<h5 class="bg-warning">' + congressPersonResult.state_name    + '</h5>'

               rightColHTMLStr +=   '</div>'

               rightColHTMLStr +='</div>'

            })

            congressPersonsEl.innerHTML = rightColHTMLStr
         }) //Promise Handler
}


// ================= Controller Router Declaration =====================
// - used for both 'initialization' and 'onhashchange'

var controllerRouter = function(){
   var currentState = window.location.hash.slice(1)

   console.log(window.location.hash)
   console.log(currentState)

   if ( currentState.length === 0 ){
         fetchAndRenderLegislatorData('SC')
         fetchAndRenderHeartsData('SC')
         return
   }

   fetchAndRenderLegislatorData(currentState)
   fetchAndRenderHeartsData(currentState)

}

var handleSearchClick = function(evt){
   console.log(evt)
   window.location.hash = stateInputEl.value.toUpperCase()

}

var congressPersonsEl = document.querySelector('.congress-persons')
var loveCountEl = document.querySelector('.love-count')

var searchBtnEl = document.querySelector('.search-btn')
var stateInputEl = document.querySelector('.state-input')

// ================= Controller Execution =====================
stateInputEl.addEventListener('keydown', function(evt){ if(evt.keyCode === 13) window.location.hash = stateInputEl.value.toUpperCase() })
searchBtnEl.addEventListener('click', handleSearchClick )
window.addEventListener('hashchange', controllerRouter )

controllerRouter()


// if(typeof myApiSecret === 'undefined'){
//    var myApiSecret = ''
// }
//
// $.getJSON("https://api.github.com/users/t3patterson?"+myApiSecret)
// $.getJSON("https://api.github.com/users/t3patterson/repos?"+myApiSecret)
