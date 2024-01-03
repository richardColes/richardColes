let guesses = 0; //track of guesses
let score = 0; //track of score
let randomNumber = Math.floor(Math.random() * 100); //random number

//function to get a value from the user input
function checkGuess(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  let guessInput = document.getElementById("guessInput");
  let feedback = document.getElementById("feedback");

  let userValue = guessInput.value;

  guesses++; // Increment the number of guesses

  // Update the attempts count
  document.getElementById("attemptsCount").innerText = guesses;

  if (isNaN(userValue) || userValue < 1 || userValue > 100) {
    feedback.innerText = "Please enter a number between 1 and 100";
  } else {
    let userGuess = parseInt(userValue);

    if (userGuess == randomNumber) {
      feedback.innerText = "Congratulations! You guessed the number!";
      // Display the score
      document.getElementById("score").innerHTML = "You got it in " + guesses + " guesses!";
    } else if (userGuess < randomNumber) {
      feedback.innerText = "Too low! Guess again.";
    } else {
      feedback.innerText = "Too high! Guess again.";
    }
  }
}
