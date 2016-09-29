
console.log('\n\n\n\n\n\n========================')
console.log('(4) FUNCTIONS + OBJECTS EXAMPLE')
console.log('------------------------')

var choreObject1 = {
   taskName: "Sweep bottom floor",
   dueDate: "09-30-2016",
   isDone: false,
   isUrgent: true,

}

var choreObject2 = {
   taskName: "Restock Pantry",
   dueDate: "09-29-2016",
   isDone: false,
   isUrgent: false,

}

var markFinished = function(cObj, msg){
   cObj.comment = msg
   cObj.isDone = true
   cObj.isUrgent = false
   return cObj
}

var updatedChore = markFinished( choreObject2, "i bought off brand cheerios this time" )
console.log(updatedChore)












console.log('\n\n\n\n\n\n========================')
console.log('(5) OBJECT METHODS EXAMPLE')
console.log('------------------------')

var choreObj3 = {
   taskName: "Pay Rent",
   dueDate: "10-01-2016",
   isDone: false,
   isUrgent: true,
   //METHOD
   logStatus: function(addlInfo){
      console.log("CHORE: " + this.taskName + " --- due:" + this.dueDate)
      console.log("Finished?  " + this.isDone )
      console.log("Super Important?  " + this.isDone )
      console.log('..........')
      console.log('ADDL: ' + addlInfo)

   },
   // METHOD
   markDone: function(msg){
      this.isDone = true
      this.isUrgent = false
      this.comment = msg
   }
}

//NOTE: Method Execution
choreObj3.logStatus("this chore reallly needs to get done on time")

choreObj3.markDone("roomie was happy i paid early")

console.log(choreObj3)
