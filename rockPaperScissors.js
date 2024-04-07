



function playRound(userInput, computerSelection, scores) {

    if (userInput == 'rock' && computerSelection == 'scissors') {
        alert('You win, rock beats scissors');
        return (scores.userScore += 1);

    }

    else if (userInput == 'paper' && computerSelection == 'rock') {
        alert('You win, paper beats rock');
        return (scores.userScore += 1);

    }

    else if (userInput == 'scissors' && computerSelection == 'paper') {
        alert('You win, scissors beats paper');
        return (scores.userScore += 1);
    }

    else if (computerSelection == 'rock' && userInput == 'scissors') {
        alert('You lose, rock beats scissors');
        return (scores.computerScore += 1);

    }

    else if (computerSelection == 'paper' && userInput == 'rock') {
        alert('You lose, paper beats rock');
        return (scores.computerScore += 1);

    }

    else if (computerSelection == 'scissors' && userInput == 'paper') {
        alert('You lose, scissors beats paper');
        return (scores.computerScore += 1);
    }

    else if (computerSelection == userInput) {
        alert("You tied")
        return;
    }

    alert("Not a valid input");
    return;


}



function playGame() {
    var scores = {
        userScore: 0,
        computerScore: 0
    }



    for (let i = 0; i < 1; i++) {
        const options = ['rock', 'paper', 'scissors'];

        computerSelection = ((() => options[Math.floor(Math.random() * 3)])());

        console.log(computerSelection);

        const userInput = prompt("Please enter your selection:").toLowerCase();
        playRound(userInput, computerSelection, scores)
    }

    console.log(scores)

    if (scores['userScore'] > scores['computerScore']) {
        alert("You win: " + scores.userScore + " to " + scores.computerScore);
    }

    else if (scores['userScore'] < scores['computerScore']) {
        alert("You lost: " + scores.userScore + " to " + scores.computerScore);
    }

    else {
        alert("You tied.")
    }
}

playGame();