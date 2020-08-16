/*----- constants -----*/
let number = (Math.floor(Math.random() * 100) + 1);
let prevGuesses = [];
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
let button = document.querySelector('button');
let output = document.getElementById('outputtext');
let inputText = document.getElementById('inputtext');
let getGuess = document.getElementById('userInput');
/*----- event listeners -----*/

button.addEventListener('click', function() {
    let getGuess = document.getElementById('userInput').value;

    if (getGuess == number) {
        output.innerHTML = `You guessed it! The number is ${number}!`;
        button.style.visibility = 'hidden';
    }
    if (getGuess < number) {
        output.innerHTML = "Your guess is too low...";
        prevGuesses.push(getGuess);
    }
    if (getGuess > number) {
        output.innerHTML = "Your guess is too high...";
        prevGuesses.push(getGuess);
    }
    if (isNaN(getGuess) || getGuess < 1 || getGuess > 100) {
        output.innerHTML = "Your guess is not valid. Please enter a number between 1-100"
    }

    if (prevGuesses.length > 0)
        document.getElementById('arraytext').innerHTML = `${prevGuesses}`;
});