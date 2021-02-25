let turnsTaken= 0;
let currentPlayer="X"
let player1 = "X"
let player2= "O"
let gamehasEnd= false; 
function performLogic(buttonId,tile){
  console.log(buttonId, tile);
  $(buttonId).hide(); 
  $(tile).text(currentPlayer)
  switchPlayers();
   }
function switchPlayers() {
    turnsTaken = turnsTaken + 1;
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else if (currentPlayer === "O") {
        currentPlayer = "X";
    }
}

  function threeInARow(tileId1,tileID2,tileID3)
{}
function checkVertical() 
  {     let won1 = threeInARow("#tile1", "#tile4", "#tile7");  
   let won2 = threeInARow("#tile2", "#tile5", "#tile8"); 
   let won3 = threeInARow("#tile3", "#tile6", "#tile9");   
   if (won1 || won2 || won3     ) 
   {    return true;  }
   return false;}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
})

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

