var questions;
var round = 0;
var index = 0;
var left;
var right;
var score = 0;

function startgame(){
  document.getElementById("col").classList.add('slide-out');
  const animation = document.getElementById("col");
  animation.addEventListener("animationend", () => {
    document.getElementById("col").style.visibility = "hidden";
    loadgame();
  });
}

async function loadgame(){
  var rawData;
  await fetch("https://withercraft303.github.io/hearing_loss/js/data.txt")
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      rawData = data;
  }).catch(err => {
    console.log("no file");
    console.log(err);
  });

  questions = shuffle(rawData);
  
  document.getElementById("game-display").classList.add("fade-in");
  document.getElementById("game-options").classList.add("fade-in");

  left = 0;
  right = 1;
  index = 2;
  document.getElementById("display-score").innerHTML = "Score: " + score;
  document.getElementById("left-button").innerHTML = questions[left]["place"];
  document.getElementById("right-button").innerHTML = questions[right]["place"];
}

function shuffle(list){
  var shuffledList = [];
  var visited = new Set();
  var randIndex;
  for (var i = 0; i < list.length; i++){
    randIndex = Math.floor(Math.random()*list.length);
    while (visited.has(randIndex)){
      randIndex = Math.floor(Math.random()*list.length);
    }
    shuffledList[i] = list[randIndex];
    visited.add(randIndex);
  }
  return shuffledList;
}

function leftbutton(){
  if (questions[left]["dba"] > questions[right]["dba"]){
    score++;
  }
  loadNextQuestion()
}
function rightbutton(){
  if (questions[right]["dba"] > questions[left]["dba"]){
    score++;
  }
  loadNextQuestion()
}

function loadNextQuestion(){
  /* general updates */
  document.getElementById("display-score").innerHTML = "Score: " + score;
  document.getElementById("left-button").innerHTML = questions[left]["place"] + "<br>sound intensity: " + questions[left]["dba"] + "dba";
  document.getElementById("right-button").innerHTML = questions[right]["place"] + "<br>sound intensity: " + questions[right]["dba"] + "dba";

  document.getElementById("left-button").disabled = true;
  document.getElementById("right-button").disabled = true;

  if (index >= questions.length){
    return;
  }

  /* change to next question */
  if (questions[right]["dba"] > questions[left]["dba"]){
    document.getElementById("left-button").style.background = "#ff849f";
    document.getElementById("right-button").style.background = "#a1eeb8";
    document.getElementById("left-button").classList.add("change-option");
    left = index;
    index++;
  } else {
    document.getElementById("left-button").style.background = "#a1eeb8";
    document.getElementById("right-button").style.background = "#ff849f";
    document.getElementById("right-button").classList.add("change-option");
    right = index;
    index++;
  }

  setTimeout(function(){
    document.getElementById("left-button").innerHTML = questions[left]["place"];
    document.getElementById("right-button").innerHTML = questions[right]["place"];
    document.getElementById("left-button").style.background = "aliceblue";
    document.getElementById("right-button").style.background = "aliceblue";
  }, 1200);
  setTimeout(function(){
    document.getElementById("left-button").disabled = false;
    document.getElementById("right-button").disabled = false;
    document.getElementById("left-button").classList.remove("change-option");
    document.getElementById("right-button").classList.remove("change-option");
  }, 2000);
}