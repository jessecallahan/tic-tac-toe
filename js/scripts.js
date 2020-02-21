
  var board = [];

    
// Game.prototype.addSpace = function(space){
//     this.board.push(space);
// }
    

function Player(mark){
    this.mark = mark;
}


var testPlayer = new Player("X");
console.log(testPlayer.mark); // returns "X"


function Space (xCoordinate, yCoordinate, markedBy){
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.markedBy = markedBy;
}



$(document).ready(function(){

    // $("button#00").click(function() {
    //     alert(this.id); // or alert($(this).attr('id'));
    // });
    // document.getElementById("myCheck").click();
    
    $("#topleft").click(function(event){
        event.preventDefault();
        var inputtedX = 1;
        var inputtedY = 1;
        var inputtedMarkedby = "X";
        var newSpace = new Space (inputtedX, inputtedY, inputtedMarkedby);
        board.push(newSpace);
        console.log(board);
    });  
});  
//     function isCherries(space) { 
//     return space.xCoordinate === 1 && space.yCoordinate === 2;
//   }

//   board.find(isCherries)

// const found = board.find(element => element > 10);
// var board = new Board();
// var testSpace = board.find(1, 2); // board.find(1,2) returns a Space object

// testSpace.xCoordinate(); // returns 1
// testSpace.yCoordinate(); // returns 2

// testSpace.mark(testPlayer);
// testSpace.markedBy(); // returns testPlayer or "X"

// board.gameOver(); // returns a boolean