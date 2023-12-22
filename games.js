// games.js

// Math Game
var currentMathQuestion;

function generateMathQuestion() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    return {
        question: num1 + " * " + num2,
        answer: num1 * num2
    };
}

function checkMathAnswer() {
    var userAnswer = document.getElementById("math-userAnswer").value;
    var feedbackElement = document.getElementById("math-feedback");

    if (userAnswer.trim() === "") {
        feedbackElement.textContent = "";
        return;
    }

    var correctAnswer = currentMathQuestion.answer;
    if (parseInt(userAnswer) === correctAnswer) {
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect. Try again!";
    }
}

function startMathGame() {
    currentMathQuestion = generateMathQuestion();
    document.getElementById("math-question").textContent = "What is " + currentMathQuestion.question + "?";
    document.getElementById("math-userAnswer").value = "";
    document.getElementById("math-feedback").textContent = "";
}

// Guessing Game
var secretNumber;

function startGuessingGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    alert("I'm thinking of a number between 1 and 10. Can you guess what it is?");
    checkGuessingGame();
}

function checkGuessingGame() {
    var userGuess = prompt("Enter your guess:");

    if (userGuess === null) {
        alert("Game canceled.");
    } else {
        userGuess = parseInt(userGuess);

        if (isNaN(userGuess)) {
            alert("Please enter a valid number.");
            checkGuessingGame();
        } else {
            if (userGuess === secretNumber) {
                alert("Congratulations! You guessed the correct number!");
            } else {
                alert("Sorry, that's not the correct number. Try again!");
                checkGuessingGame();
            }
        }
    }
}

// Card Game
var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function drawCard() {
    var randomSuit = suits[Math.floor(Math.random() * suits.length)];
    var randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    return {
        suit: randomSuit,
        rank: randomRank
    };
}

function startCardGame() {
    var drawnCard = drawCard();
    alert("You drew the " + drawnCard.rank + " of " + drawnCard.suit + "!");
}