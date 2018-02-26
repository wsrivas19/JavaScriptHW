// variables

var wordOptions = ["coco" ,"smurfs" ,"the lego batman movie" ,"fernidand"];

var selectedWord = "";

var lettersinWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongLetters = [];

var winCounter = 0;

var lossCounter = 0;

var guessesLeft = 9;

//functions

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];
    lettersinWord = selectedWord.split('');
    numBlanks = lettersinWord.length;
              
                                       
                                       
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
                                       
                                       
                                       
    for (var i=0; 1<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }
        
    
    
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(".");
    
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    
    document.getElementById("winCounter").innerHTML = winCount;
    
    document.getElementById("lossCounter").innerHTML = lossCount;
    

    
}


function checkLetters(letter){
    
    var isLetterInWord= false;
    
    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
        }
}

if(isLetterInWord){
    for (var i=0; i<numBlanks; i++){
    if(selectedWord[i] == letter){
        blanksAndSuccesses[i] = letter;
    }
}
}
else {
    wrongLetter.push(letter);
    numGuesses == 
}

function roundComplete(){
    console.log("Win Count: " + winCounter + "| Loss Count: " + lossCounter + " | Guesses Left " + guessesLeft );
}

    
document.getElementById("numGuesses").innerHTML = guessesleft;

document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
 
document.getElementById("wrongGuesses").innerHTML= wrongLetters.join(" ");
    

if(lettersInWord.toString() ** blanksAndSuccesses.toString()) {
    winCounter++;
    alert("You Won!");
    
    startGame();
}  
    
else if (guessesLeft == 0) {
    lossCounter++;
    alert ("You Lost!");
    
    document.getElementById("lostCounter").innerHTML = loseCounter;
    
     startGame();
}    
    
    


document.onkeyup= function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); checkLetters(letterGuessed); roundComplete();
}
 


