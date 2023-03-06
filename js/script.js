function playGame(playerInput) {
  clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'noźyce';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let ComputerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + ComputerMove);

  console.log('Gracz wpisał: ' + playerInput);
  let PlayerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + PlayerMove);

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage(
      'Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + ':'
    );
    console.log('Ruchy graczy:', argComputerMove, argPlayerMove);

    if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'noźyce' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'papier' && argPlayerMove == 'noźyce')
    ) {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrałeś!');
    }
  }
  displayResult(ComputerMove, PlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});
