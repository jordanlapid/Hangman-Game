//Create array to store all possible words
//Create variable to track wins
//Create variable to track number of guesses available
//Create array to store letters that were already guessed



var wordList = ["khaleesi","daenarys","jonsnow","targaryen","stark","lannister","greyjoy","dorne","nightking","wight","tyrion","thehound","themountain","cersei","jamie","tyrell","whitewalker"];

var totalWins;

var guessesLeft;

var guessedLetters =[];

var word = wordList[Math.floor(Math.random()*wordList.length)];



document.onkeyup = function (event) {
	var keyHit = event.key;
	playGame(keyHit);
}



function playGame (keyHit){
	var currentWord = word.split("");
	var underscore = Array(currentWord.length+1).join("-");
	document.getElementById("currentWord").innerHTML = underscore;
	console.log(underscore)
	console.log(currentWord)


}