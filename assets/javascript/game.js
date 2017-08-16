//Create array to store all possible words
//Create variable to track wins
//Create variable to track number of guesses available
//Create array to store letters that were already guessed
var wordList = ["khaleesi","daenarys","jonsnow","targaryen","stark","lannister","greyjoy","dorne","nightking","wight","tyrion","thehound","themountain","cersei","jamie","tyrell","whitewalker"];
var totalWins = 0;
var totalLosses = 0;
var guessesLeft = 9;
var guessedLetters =[];
var word = wordList[Math.floor(Math.random()*wordList.length)];
var currentWord = word.split("");
var underscore = Array(currentWord.length+1).join("-");

document.onkeyup = function (event) {
	var keyHit = event.key;
	playGame(keyHit);
}


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}


function resetGame (){
	guessedLetters =[];
	word = wordList[Math.floor(Math.random()*wordList.length)];
	currentWord = word.split("");
	underscore = Array(currentWord.length+1).join("-");
	guessesLeft = 9;
}

function playGame (keyHit){
	document.getElementById("pAgain").innerHTML = "Good Luck!";
	document.getElementById("cWord").innerHTML = underscore;
	console.log(currentWord);

	for(var i = 0; i < currentWord.length; i++){
		if(keyHit === currentWord[i]){
			underscore = setCharAt(underscore,i,currentWord[i]);
			document.getElementById("cWord").innerHTML = underscore;

		}
	}
		if(!currentWord.includes(keyHit) && !guessedLetters.includes(keyHit)){
			guessesLeft = guessesLeft -1;
			document.getElementById("gLeft").innerHTML = guessesLeft;
		}


		if(keyHit) {
			if(!guessedLetters.includes(keyHit) ){
			guessedLetters.push(keyHit); 
		}
			document.getElementById("gLetters").innerHTML = guessedLetters;
		}

		if(guessesLeft === 0){
			totalLosses = totalLosses + 1;
			document.getElementById("tLosses").innerHTML = totalLosses;
			resetGame();
			document.getElementById("cWord").innerHTML = underscore;
			document.getElementById("gLetters").innerHTML = guessedLetters;
			document.getElementById("gLeft").innerHTML = guessesLeft;
			document.getElementById("pAgain").innerHTML = "Press any Key to Play Again!";
		}

		if(underscore === word){
			totalWins = totalWins + 1;
			document.getElementById("tWins").innerHTML = totalWins;
			resetGame();
			document.getElementById("tWins").innerHTML = totalWins;
			document.getElementById("gLetters").innerHTML = guessedLetters;
			document.getElementById("gLeft").innerHTML = guessesLeft;
			document.getElementById("pAgain").innerHTML = "Press any Key to Play Again!";
		}

}

