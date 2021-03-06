function randomPlay(row, col) {
  if (checkLegalMove(row, col)) {
    playTurn(row, col);
    if (checkWin())
      randomEndGame(1);
    else {
        randomAITurn();
    }
  }
}

function randomAITurn () {
    var xrow;
    var xcol;
    var flag = 1;
    while (flag) {
      xrow= Math.floor(Math.random()*3);
      xcol= Math.floor(Math.random()*3);
      if (checkLegalMove(xrow, xcol)) {
        flag=0;
        playTurn(xrow, xcol);
        if (checkWin())
            randomEndGame(2);
      }
    }
}

function randomEndGame(num) {
  if (num == 0) {
    $(".modal_text").html("Tie game!");
    $("#myModal").css("display", "block");
  }
  else if (num == 1) {
    $(".modal_text").html("Player 1 Wins!");
    $("#myModal").css("display", "block");
  }
  else if (num == 2) {
    $(".modal_text").html("AI Wins!");
    $("#myModal").css("display", "block");
  }
}
