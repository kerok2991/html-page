// console.log('Ruff Ruff')

// String
// let stringVariable = 'Dogs are a MUST'

// Int / number
// let numberVariable = 8

// Boolean
// let boolearVariable = true

// stringVariable = 'Nay on the cats!'

// console.log(stringVariable)

function getUserName(){
    let userName = prompt('Please Enter your Name: ');

    if(userName == 'kyrillos'){
        document.write('Ruff dog whisperer ' + userName);
    } else {
        document.write(userName);
    }
}

function firsttimedogparent(){
    let userAnswer = prompt('Are you a first time dog parent?');
    console.log(userAnswer);
    if(userAnswer.toLowerCase() == 'yes'){
        let url = "https://i.pinimg.com/736x/68/e4/c1/68e4c12f5d4bdb42f584c41ce32bc5d5.jpg";
        document.write('<img src="' + url + '">');
    } 
}

function randomNumberGenerator(){
    // Got the folowing code from W3 Schools
    // https://www.w3schools.com/js/js_random.asp
    let correctAnswer = Math.floor(Math.random() * 100) +1;
    return correctAnswer;
}

function userGuessingGame(correctAnswer){
    userAnswer = prompt("Guess a number between 1 and 100");
    if(userAnswer == correctAnswer){
        alert('You got it right');
    } else {
        alert('Sorry, that answer is incorrect');
    }
}

function guessMansBestFriend(correctAnswer){
    var userAnswer = prompt("Do you want to play a game? (yes or no)");
    console.log(wannaPlay)
    while (wannaPlay.toLowerCase() == 'yes'){
        var numberOfAttempts = 2;
        for(var i = 1; i <= numberOfAttempts; i++){
            userAnswer = prompt("Who is mans best friend? (Dog man or tech)");

            while((userAnswer == 'man') || (userAnswer == 'tech')){
                userAnswer = prompt("Who is mans best friend? (Dog man or tech)")
            }
            if(userAnswer == 'dog'){
                alert('You got it right ' + (numberOfAttempts - i) + ' attempts left');
                break;
            } else if(userAnswer < correctAnswer){
                alert('Your answer is disappointing. Try again! ' + (numberOfAttempts - i) + ' attempts left');
            }
        }
        wannaPlay = prompt('Do you want to play a game? (yes or no)');
        if (wannaPlay == 'yes'){
            correctAnswer = userGuessingGame();
        }
    }

}