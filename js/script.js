let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';

if(randomNumber == 1){
    computerMove = 'kamień';
}   else if(randomNumber == 2){
    computerMove = 'papier';
}   else if(randomNumber == 3){
    computerMove = 'noźyce';
}

printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';

if(playerInput == '1'){
    playerMove = 'kamień';
}   else if(playerInput == 2){
    playerMove = 'papier';
}   else if(playerInput == 3){
    playerMove = 'noźyce';
}

printMessage('Twój ruch to: ' + playerMove);


if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}   else if(computerMove == 'kamieĶ' && playerMove == 'noźyce'){
    printMessage('Przegrałeś!');
}   else if(computerMove == 'noźyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}   else if(computerMove == 'noźyce' && playerMove == 'papier'){
    printMessage('Przegrałeś!');
}   else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrałeś!');
}   else if(computerMove == 'papier' && playerMove == 'noźyce'){
    printMessage('Ty wygrywasz!');
}   else if(computerMove == 'papier' && playerMove == 'papier'){
        printMessage('Remis!');
}   else if(computerMove == 'noźyce' && playerMove == 'noźyce'){
        printMessage('Remis!');
}   else if(computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage('Remis!');
}   else if(playerMove == 'nieznany ruch'){
        printMessage('Błędne dane!');
}
