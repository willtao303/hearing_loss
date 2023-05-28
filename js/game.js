

var score = 0
var qIndex = 0;
var questions = [];
let maxQ = 10;

function setup() {
  /*
  fetch("https://withercraft303.github.io/hearing_loss/js/questions.txt")
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      questions = data;
  }).catch(err => {
    console.log("no file");
    console.error(err);
  });*/
  var gameObjs = document.getElementsByClassName("game");
  for (var i = 0; i < gameObjs.length; i++){
    gameObjs[i].style.visibility = "visible";
  }
  var pregameObjs = document.getElementsByClassName("pregame");
  for (var i = 0; i < pregameObjs.length; i++){
    pregameObjs[i].style.visibility = "hidden";
  }
  document.getElementById("display").innerHTML = "Score: " + score + "\n" + questions[qIndex];
}

function isSafe() {
  if (questions[qIndex]["db"] < 70){
    score += 1;
  }
  if (qIndex < 10){
    qIndex += 1;
  }
  document.getElementById("display").innerHTML = "Score: " + score + "\n" + questions[qIndex];
}

function isUnsafe() {
  if (70 <= questions[qIndex]["db"] && questions[qIndex]["db"] <= 120){
    score += 1;
  }
  if (qIndex < 10){
    qIndex += 1;
  }
  document.getElementById("display").innerHTML = "Score: " + score + "\n" + questions[qIndex];
}

function isDangerous() {
  if (120 < questions[qIndex]["db"]){
    score += 1;
  }
  if (qIndex < 10){
    qIndex += 1;
  }
  document.getElementById("display").innerHTML = "Score: " + score + "\n" + questions[qIndex];
}