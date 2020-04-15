
function Player(marker) {
  this.marker = marker;
}

function Space(yCoordinate, xCoordinate, markedSpace) {
  this.yCoordinate = yCoordinate;
  this.xCoordinate = xCoordinate;
  this.markedSpace = markedSpace;
}
var space1 = new Space(1, 1, "")
var space2 = new Space(1, 2, "")
var space3 = new Space(1, 3, "")
var space4 = new Space(2, 1, "")
var space5 = new Space(2, 2, "")
var space6 = new Space(2, 3, "")
var space7 = new Space(3, 1, "")
var space8 = new Space(3, 2, "")
var space9 = new Space(3, 3, "")
function Board() {
  this.spaces = [space1, space2, space3, space4, space5, space6, space7, space8, space9];
};

Player.prototype.mark = function () {
  return this.marker;
}
Space.prototype.mark = function (player) {
  return this.markedSpace += player.marker;
}
Space.prototype.markedBy = function () {
  return this.markedSpace;
}

// Board.prototype.threeInARow = function (y, x) {
//   for (i = 0; i < board.spaces.length; i++) {
//     if (this.spaces[i].yCoordinate === y && this.spaces[i].xCoordinate === x) {
//       return board.spaces[i]
//     }
//   }
// }
Board.prototype.find = function (y, x) {
  for (i = 0; i < board.spaces.length; i++) {
    if (this.spaces[i].yCoordinate === y && this.spaces[i].xCoordinate === x) {
      return board.spaces[i]
    }
  }
}


Board.prototype.gameOver = function () {
  for (i = 0; i < board.spaces.length; i++) {
    if (spaces.markedSpace != "") {
      return true
    }
  }
}


var testPlayer = new Player("X");
console.log(testPlayer.mark());

var board = new Board();
var testSpace = board.find(1, 2)
console.log(testSpace)


console.log(testSpace.xCoordinate)
console.log(testSpace.yCoordinate)

testSpace.mark(testPlayer)
console.log(testSpace.markedBy())

console.log(board.gameOver());






