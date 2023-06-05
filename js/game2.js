var questions;
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
  document.getElementById("left-button").innerHTML = questions[left]["place"] + "<br>Sound Intensity: " + questions[left]["dba"] + "dba";
  document.getElementById("right-button").innerHTML = questions[right]["place"] + "<br>Sound Intensity: " + questions[right]["dba"] + "dba";

  document.getElementById("left-button").disabled = true;
  document.getElementById("right-button").disabled = true;


  if (questions[right]["dba"] > questions[left]["dba"]){
    document.getElementById("left-button").classList.add("wrong");
    document.getElementById("right-button").classList.add("correct");
    if (index < questions.length){
      document.getElementById("left-button").classList.add("change-option");
    }
    left = index;
    index++;
  } else {
    document.getElementById("left-button").classList.add("correct");
    document.getElementById("right-button").classList.add("wrong");
    if (index < questions.length){
      document.getElementById("right-button").classList.add("change-option");
    }
    right = index;
    index++;
  }

  if (index > questions.length){
    finish();
    return;
  }

  /* change to next question */
  setTimeout(function(){
    console.log("reset");
    document.getElementById("left-button").innerHTML = questions[left]["place"];
    document.getElementById("right-button").innerHTML = questions[right]["place"];
    document.getElementById("left-button").classList.remove("correct");
    document.getElementById("left-button").classList.remove("wrong");
    document.getElementById("right-button").classList.remove("correct");
    document.getElementById("right-button").classList.remove("wrong");
  }, 1200);
  setTimeout(function(){
    document.getElementById("left-button").disabled = false;
    document.getElementById("right-button").disabled = false;
    document.getElementById("left-button").classList.remove("change-option");
    document.getElementById("right-button").classList.remove("change-option");
  }, 2000);
}

function finish(){
  document.getElementById("left-button").classList.add("fade-out");
  document.getElementById("right-button").classList.add("fade-out");
  document.getElementById("game-display").classList.add("finish-box-change");
  document.getElementById("game-text-container").classList.add("finish-text-change");
  document.getElementById("game-text-container").classList.add("finish-text-change");
  document.getElementById("game-options").style.height = 0;

  if (score <= 6){
    document.getElementById("display-line").innerHTML = "Nice!";
  }
  if (score == 8){
    document.getElementById("display-line").innerHTML = "So Close!";
  }
  if (score == 9){
    document.getElementById("display-line").innerHTML = "Perfect!";
  }

  document.getElementById("display-score").innerHTML = "Score: " + score + "/9";
  document.getElementById("next-button-bar").classList.remove("hide");

}