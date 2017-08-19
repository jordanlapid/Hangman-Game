
var wordList = ["khaleesi","daenarys","jonsnow","targaryen","stark","lannister","greyjoy","dorne","nightking","wight","tyrion","thehound","themountain","cersei","jamie","tyrell","whitewalker","dothraki","khalasar","valyrian","winterfell","highgarden","drownedgod","valarmorgulis","ironthrone","wildling","mancerayder","azorahai","rhaegar","khaldrogo","martell","sunspear","ghost","nymeria","shaggydog","longclaw","lady","baratheon"];
var totalWins = 0;
var totalLosses = 0;
var guessesLeft = 9;
var guessedLetters =[];
var word = wordList[Math.floor(Math.random()*wordList.length)];
var currentWord = word.split("");
var underscore = Array(currentWord.length+1).join("-");
var gameThemeSong = document.getElementById("gameTheme");
var youLose = document.getElementById("youLose");
var gangnam = document.getElementById("gangnamStyle");

hidePsy();
document.getElementById("gLeft").innerHTML = guessesLeft;
document.getElementById("cWord").innerHTML = underscore;
document.getElementById("gLetters").innerHTML = guessedLetters;
document.getElementById("tWins").innerHTML = totalWins;
document.getElementById("tLosses").innerHTML = totalLosses;


function hidePsy(){
	document.getElementById("psy").style.visibility = "hidden"
}

function showPsy (){
	setTimeout(function(){
	    document.getElementById("psy").style.visibility = "visible";
	}, 3200);
	
}

function changePicture (){
	setTimeout(function(){
	document.getElementById("secondPic").src ="https://fontmeme.com/permalink/170818/4d9cf1fe92fe1ab0adeeacf99525f5f4.png";
	}, 3200);
}

function changePictureBack(){
	document.getElementById("secondPic").src ="https://fontmeme.com/permalink/170816/e3fe4dfce4722d2b2fba0380788b6b10.png";

}

function pauseGangnam (){
	gangnam.currentTime = 0;
	gangnam.pause();
}


function playGangnam (){
	gangnam.currentTime = 150.4;
	gangnam.play();
}

function playYouLose(){
	youLose.play();
	setTimeout(function(){
	    youLose.pause();
	    youLose.currentTime = 0;
	}, 1500);
}

function playGameTheme(){
	gameThemeSong.play();
}

function pauseGameTheme(){
	gameThemeSong.currentTime = 0;
	gameThemeSong.pause();
}

document.onkeyup = function (event) {
	var keyHit = event.key;
	playGame(keyHit);
	console.log(keyHit);
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

	console.log(currentWord);

	if(guessesLeft > 0 && underscore != word){

		playGameTheme();

		for(var i = 0; i < currentWord.length; i++){
			if(keyHit === currentWord[i]){
				underscore = setCharAt(underscore,i,currentWord[i]);
				document.getElementById("cWord").innerHTML = underscore;

			}
		}
			if(!currentWord.includes(keyHit) && !guessedLetters.includes(keyHit) && keyHit != "Enter"){
				guessesLeft = guessesLeft -1;
				document.getElementById("gLeft").innerHTML = guessesLeft;
			}


			if(keyHit && keyHit != "Enter") {
				if(!guessedLetters.includes(keyHit) ){
				guessedLetters.push(keyHit); 
			}
				document.getElementById("gLetters").innerHTML = guessedLetters;
			}

			if(guessesLeft === 0){
				totalLosses = totalLosses + 1;
				document.getElementById("tLosses").innerHTML = totalLosses;
				pauseGameTheme();
				playYouLose();
				document.getElementById("pAgain").innerHTML = "Press Enter to Play Again!";
			}

			if(underscore === word){
				totalWins = totalWins + 1;
				document.getElementById("tWins").innerHTML = totalWins;
				pauseGameTheme();
				playGangnam();
				changePicture();
				showPsy();
				setTimeout(function(){ document.getElementById("pAgain").innerHTML = "Press Enter to Play Again!"; }, 3200);
				
			}

	} else {
			if(keyHit === "Enter"){
				pauseGangnam();
				changePictureBack();
				hidePsy();
				resetGame();
				document.getElementById("pAgain").innerHTML = "Good Luck!";
				document.getElementById("cWord").innerHTML = underscore;
				document.getElementById("gLetters").innerHTML = guessedLetters;
				document.getElementById("gLeft").innerHTML = guessesLeft;
		}
	}
}

