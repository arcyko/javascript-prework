function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }   else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'noźyce'; 
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let argComputerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + argPlayerMove);

/*
if(randomNumber == 1){
    computerMove = 'kamień';
}   else if(randomNumber == 2){
    computerMove = 'papier';
}   else if(randomNumber == 3){
    computerMove = 'noźyce';
}
*/

/*
if(playerInput == '1'){
    playerMove = 'kamień';
}   else if(playerInput == 2){
    playerMove = 'papier';
}   else if(playerInput == 3){
    playerMove = 'noźyce';
}
*/

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + ':');
  
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'noźyce' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'noźyce'){
        printMessage('Ty wygrywasz!');
    }   else if(argComputerMove == argPlayerMove){
            printMessage('Remis!');
    }   else if(argPlayerMove == 'nieznany ruch'){
            printMessage('Błędne dane!');
    }   else {
            printMessage('Przegrałeś!');
    }
}
displayResult(argComputerMove, argPlayerMove);


/*
if(argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'noźyce' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'noźyce'){
    printMessage('Ty wygrywasz!');
}   else if(argComputerMove == argPlayerMove){
        printMessage('Remis!');
}   else if(argPlayerMove == 'nieznany ruch'){
        printMessage('Błędne dane!');
}   else {
        printMessage('Przegrałeś!');
}
*/
