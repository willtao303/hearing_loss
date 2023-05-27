

var score = 0
var qIndex = 0;
var questions;
let maxQ = 10;

function setup() {
  document.getElementById("display").innerHTML = "Score: " + score + "\n" + questions[qIndex];
  fetch("questions.txt")
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      questions = data;
  }).catch(err => {
    console.log("no file");
    console.error(err);
  });
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