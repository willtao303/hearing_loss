var score = 0
var qIndex = 0;
var questions = [
  {
    "object": "siren",
    "image": "images/sirens.jpg",
    "src": "www.istockphoto.com",
    "db": 115
  },
  {
    "object": "jackhammer",
    "image": "images/jackhammer.jpg",
    "src": "www.istockphoto.com",
    "db": 130
  },
  {
    "object": "coffee grinder",
    "image": "images/coffee.png",
    "src": "www.pexels.com",
    "db": 75
  },
  {
    "object": "washing machine",
    "image": "images/no-image.png",
    "src": "",
    "db": 70
  },
  {
    "object": "whisper",
    "image": "images/whisper.jpg",
    "src": "www.123rf.com",
    "db": 30
  }
]
;
let maxQ = 5-1;

async function setup() {
  
  /*await fetch("https://withercraft303.github.io/hearing_loss/js/questions.txt")
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      questions = data;
  }).catch(err => {
    console.log("no file");
    console.error(err);
  });*/
  document.getElementById("pregame").style.visibility = "hidden";
  document.getElementById("game-display").style.visibility = "visible";
  document.getElementById("game-controls").style.visibility = "visible";
  
  document.getElementById("display-object").innerHTML = questions[qIndex]["object"];
  document.getElementById("display-score").innerHTML = "Score: " + score;
}

function shuffle(){
  var indecies = Set();

  for (var i = 0; i < maxQ; i++) {
    randomIndex = Math.floor(Math.random() * currentIndex);
  }
}

function isSafe() {
  if (questions[qIndex]["db"] < 70){
    score += 1;
  }
  loadNextQuestion(questions[qIndex]["db"] < 70);
}
function isUnsafe() {
  if (70 <= questions[qIndex]["db"] && questions[qIndex]["db"] <= 120){
    score += 1;
  }
  loadNextQuestion(70 <= questions[qIndex]["db"] && questions[qIndex]["db"] <= 120);
}
function isDangerous() {
  if (120 < questions[qIndex]["db"]){
    score += 1;
  }
  loadNextQuestion(120 < questions[qIndex]["db"]);
}

function loadNextQuestion(correct){
  /*setInterval(function() {console.log("a")}, 1000);*/
  document.getElementById("display-answer").style.visibility = "visible";
  document.getElementById("display-answer").value = (questions[qIndex]["db"]/150)*100;

  if (qIndex < maxQ){
    qIndex += 1;
    document.getElementById("display-object").innerHTML = questions[qIndex]["object"];
    document.getElementById("display-score").innerHTML = "Score: " + score 
  } else {
    document.getElementById("display-object").innerHTML = "You finished!";
    document.getElementById("display-score").innerHTML = "Your final score:"  + score + "/" + (maxQ+1)
    document.getElementById("safe").disabled = true;
    document.getElementById("unsafe").disabled = true;
    document.getElementById("dangerous").disabled = true;
    document.getElementById("display-next").style.visibility = "visible";
  }
}