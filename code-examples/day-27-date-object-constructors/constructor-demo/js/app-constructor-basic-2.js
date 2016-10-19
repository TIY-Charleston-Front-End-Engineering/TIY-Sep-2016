// Constructor Function 101
var Robot = function(rName, rAge, rModel){
   this.name = rName;
   this.age = rAge;
   this.model = rModel;

   this.introduceMee = function(){
      console.log("Beepboop, my name is ", this.name )
      console.log("And my make is ", this.model )
      console.log("===========")
   }

   this.sayMessage = function(msg){
      console.log(this.name, " says: ", msg)
   }
}

var robot1     = new Robot("Robert", 8, "Parex")
var otherBot   = new Robot("Coco", 20, "Concentrate")
var myFavorite = new Robot("Rufus Alexander", 1, "NeutralPH")

console.log(robot1)
console.log("------")
console.log(myFavorite)

// printDateWithEnthusiasm("10-04-2016")
myFavorite.introduceMee()
otherBot.introduceMee()

robot1.sayMessage("i wish that i was not a robot")
