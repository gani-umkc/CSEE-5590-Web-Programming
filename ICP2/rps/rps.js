// Player choice
var PlayerChoice = prompt("Welcome to game Rock Paper Scissors \n Enter rock or paper or scissors?");
if (! PlayerChoice) {
    // Player choice was undefined
    document.write("<p>User:Usman Gani, you cheated! Refresh this screen and Play like a man.</p>");
} else {
    // Display Player choice
    document.write("<p>User Usman Gani Choice:" + " " + PlayerChoice + "</p>");
}
// assigning random math number to computer choice of rock or paper or scirrors with 1/3 probability of each
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
// Display computer choice
document.write("<p> User Computer Choice:" + " " + computerChoice + "</p>");
// Compare Player choice vs computer choice
var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            return "You win!";
        } else {
            // paper wins
            return "You lose! Refresh Page and Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Refresh Page and Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose! Refresh Page and Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};
// Run the compare function
var results = compare(PlayerChoice,computerChoice);
// Display results
document.write("<br><hr><br>" + results);