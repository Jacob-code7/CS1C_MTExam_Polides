let favoriteNumber = 7; 
let guess = null;


while (guess !== theFavNumber) {
    guess = prompt("Guess the favorite number:");

    if (guess < theFavNumber) {
        console.log("Too low! Try again.");
    } else if (guess > theFavNumber) {
        console.log("Too high! Try again.");
    } else if (guess === theFavNumber) {
        console.log("Correct! You guessed the favorite number.");
    }
}