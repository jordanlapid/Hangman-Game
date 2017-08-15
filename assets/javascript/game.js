//Create array to store all possible words
//Create variable to track wins
//Create variable to track number of guesses available
//Create array to store letters that were already guessed



var wordList = ["khaleesi","daenarys","jonsnow","targaryen","stark","lannister","greyjoy","dorne","nightking","wight","tyrion","thehound","themountain","cersei","jamie","tyrell","whitewalker"];
var totalWins;
var guessesLeft = 15;
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
function playGame (keyHit){

	document.getElementById("currentWord").innerHTML = underscore;

	for(var i = 0; i < currentWord.length; i++){
		if(keyHit == currentWord[i]){
			underscore = setCharAt(underscore,i,currentWord[i]);
			document.getElementById("currentWord").innerHTML = underscore;
		}
	}
		if(currentWord.includes(keyHit) != true){
			guessesLeft = guessesLeft -1;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
		}


}