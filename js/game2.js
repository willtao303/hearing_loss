var questions;
var round = 0;
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
  
  rawData = await fetch("https://withercraft303.github.io/hearing_loss/js/data.txt")
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      questions = data;
  }).catch(err => {
    console.log("no file");
    console.log(err);
  });

  
  document.getElementById("game-display").classList.add("fade-in");
  document.getElementById("game-options").classList.add("fade-in");

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