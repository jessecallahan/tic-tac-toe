
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

function Game(player_x, player_o, board) {
  this.player_x = player_x
  this.player_o = player_o
  this.board = board
}


Player.prototype.mark = function () {
  return this.marker;
}
Space.prototype.mark = function (player) {
  return this.markedSpace += player.marker;
}
Space.prototype.markedBy = function () {
  return this.markedSpace;
}

Board.prototype.threeInARow = function () {
  for (i = 0; i < board.spaces.length; i++) {
    if (space1.markedSpace === "X" && space2.markedSpace === "X" && space3.markedSpace === "X" ||
      space1.markedSpace === "O" && space2.markedSpace === "O" && space3.markedSpace === "O") { return true }

    if (space4.markedSpace === "X" && space5.markedSpace === "X" && space6.markedSpace === "X" ||
      space4.markedSpace === "O" && space5.markedSpace === "O" && space6.markedSpace === "O") { return true }

    if (space7.markedSpace === "X" && space8.markedSpace === "X" && space9.markedSpace === "X" ||
      space7.markedSpace === "O" && space8.markedSpace === "O" && space9.markedSpace === "O") { return true }

    if (space1.markedSpace === "X" && space4.markedSpace === "X" && space7.markedSpace === "X" ||
      space1.markedSpace === "O" && space4.markedSpace === "O" && space7.markedSpace === "O") { return true }

    if (space2.markedSpace === "X" && space5.markedSpace === "X" && space8.markedSpace === "X" ||
      space2.markedSpace === "O" && space5.markedSpace === "O" && space8.markedSpace === "O") { return true }

    if (space3.markedSpace === "X" && space6.markedSpace === "X" && space9.markedSpace === "X" ||
      space3.markedSpace === "O" && space6.markedSpace === "O" && space9.markedSpace === "O") { return true }

    if (space1.markedSpace === "X" && space5.markedSpace === "X" && space9.markedSpace === "X" ||
      space1.markedSpace === "O" && space5.markedSpace === "O" && space9.markedSpace === "O") { return true }

    if (space7.markedSpace === "X" && space5.markedSpace === "X" && space3.markedSpace === "X" ||
      space7.markedSpace === "O" && space5.markedSpace === "O" && space3.markedSpace === "O") { return true }

    if (space1.markedSpace != "" && space2.markedSpace != "" && space3.markedSpace != "" &&
      space4.markedSpace != "" && space5.markedSpace != "" && space6.markedSpace != "" &&
      space7.markedSpace != "" && space8.markedSpace != "" && space9.markedSpace != "") { return true }

    else { return false }
  }
}
Board.prototype.find = function (y, x) {
  for (i = 0; i < board.spaces.length; i++) {
    if (this.spaces[i].yCoordinate === y && this.spaces[i].xCoordinate === x) {
      return board.spaces[i]
    }
  }
}


Game.prototype.nextTurn = function (a) {
  if (a === this.player_x) {
    return this.turn = this.player_o
  }
  if (a === this.player_o) {
    return this.turn = this.player_x
  }
}


// var testPlayer = new Player("X");
// console.log(testPlayer.mark());


// var board = new Board();
// var testSpace = board.find(3, 2)
// var testSpace1 = board.find(1, 1)
// var testSpace2 = board.find(1, 3)
// console.log(testSpace)


// console.log(testSpace.xCoordinate)
// console.log(testSpace.yCoordinate)

// testSpace.mark(testPlayer)
// testSpace1.mark(testPlayer)
// // testSpace2.mark(testPlayer)
// console.log(testSpace.markedBy())
// console.log(board.threeInARow());
// console.log(board)
// console.log(board.gameOver());

var player_o = new Player("O");
var player_x = new Player("X");
var board = new Board();
var newGame = new Game(player_x, player_o, board)
newGame.board.threeInARow()
let next = newGame.nextTurn(player_x)

// onclick(square7)
let s7 = newGame.board.find(3, 1)
s7.mark(next)
console.log(newGame)



if (newGame.board.threeInARow() === true) {
  alert("dude")
}
// console.log(newGame.newboard)
// newGame.nextTurn(newGame.player_o)
// console.log(newGame)


