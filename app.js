//variable
let round = 1;
let playerOneScore = 0;
let playerTwoScore = 0;

//Selectors
let gameContainerStart = getElement("game-container-start");
let playerOneButton = getElement("player-one-shoot");
let playerOnePower = getElement("player-one-power");
let playerTwoProgress = getElement("player-two-progress");
let playerTwoPercent = getElement("player-two-percent");
let playerTwoButton = getElement("player-two-shoot");
let playerTwoPower = getElement("player-two-power");
let playerOneProgress = getElement("player-one-progress");
let playerOnePercent = getElement("player-one-percent");
let gameRound = getElement("game-round");
let playerOneScoreEle = getElement("player-one-score");
let playerTwoScoreEle = getElement("player-two-score");
let startButton =  getElement("start-button");
let endButton = getElement("end-button");

gameContainerStart.style.display = "none";
endButton.style.display = "none";

//Event Listners

    startButton.addEventListener("click", function(){
        startButton.style.display="none";
        gameContainerStart.style.display = "block";
        gameContainerStart.classList.add("flex");

        gameRound.innerHTML = round;
        function result(){
            playerOneButton.addEventListener("click", function(){
                playerOneButton.disabled = true;
                playerTwoButton.disabled = false;
                let randomNumber = getRandomNumber();
                console.log(randomNumber);
                playerOnePower.innerHTML = randomNumber;
                playerTwoProgress.value = playerTwoProgress.value - randomNumber;
                playerTwoPercent.innerHTML = playerTwoProgress.value + " %";
                if(playerTwoProgress.value <= 0){
                    alert("Player 1 Wins");
                    playerOneScoreEle.innerHTML = playerOneScore + 1;
                    onPlayerWin();
                    round++;
                    playerOneScore ++;
                    if(playerOneScore == 3) {
                        alert("Player 1 has won the game");
                        gameContainerStart.classList.remove("flex");
                        gameContainerStart.style.display = "none";
                        endButton.style.display = "block";
                       
                    }
                }
         });
       
         playerTwoButton.addEventListener("click", function(){
              playerOneButton.disabled = false;
              playerTwoButton.disabled = true;
              let randomNumber = getRandomNumber();
              playerTwoPower.innerHTML = randomNumber;
              playerOneProgress.value = playerOneProgress.value - randomNumber;
              playerOnePercent.innerHTML = playerOneProgress.value;
              if(playerOneProgress.value <= 0){
                  alert("Player 2 wins");
                  playerTwoScoreEle.innerHTML = playerTwoScore + 1;
                  onPlayerWin();
                  playerTwoScore++;
                  if(playerTwoScore == 3) {
                        alert("Player 2 has won the game");
                        gameContainerStart.classList.remove("flex");
                        gameContainerStart.style.display = "none";
                        endButton.style.display = "block";

                  }  
                
              }
                
         })
          
        
    
        }
        console.log(result());
        
    })

//Functions
function getRandomNumber(){
    return Math.floor(Math.random() * 6);
}
function onPlayerWin(){
            gameRound.innerHTML = round + 1;
            playerOneProgress.value = "100";
            playerOnePercent.innerHTML = "100 %";
            playerOnePower.innerHTML = " ";
            playerTwoProgress.value = "100";
            playerTwoPercent.innerHTML = "100 %";
            playerTwoPower.innerHTML = " ";
}
function getElement(id){
    return document.getElementById(id);
}

