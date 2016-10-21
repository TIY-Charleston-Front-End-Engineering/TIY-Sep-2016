console.log('wired up!')

var Robot = function(rName, rAge, rModel){
   this.name = rName;
   this.age = rAge;
   this.model = rModel;

   this.introduce = function(){
      console.log('beep boop. my name is ', this.name)
      console.log('i am a ', this.model)
   }

   this.createHTMLCard = function(domEl){
      '<div class="media">'
      '<div class="media-left">'
         '<img class="media-object" src="https://robohash.com/'+this.name+'" alt="...">'
      '</div>'
      '<div class="media-body">'
        '<h4 class="media-heading">' + this.name + '</h4>'
        '<p>' + this.rAge + ' | ' this.model'</p>'
      '</div>'
     '</div>'
   }
}


var billyRobot = new Robot('Billy', 33, "Circle Round")
var shanaRobot = new Robot('Snake', 12, "Square Roller")
var zekiel = new Robot('Zeke', 93, "Z Bot")



var CongressPerson = function(bioId){
   this.id = bioId
   this.data = {}

   this.fetchData: function(){

   }

   this.parseData: function(){

   }

   this.fetchPhrase: function(){
         
   }

}
