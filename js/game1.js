var score = 0
var qIndex = 0;
var questions = [];
let maxQ = 9;

function generateQuestions(questionList){
  var used = new Set();
  used.add(-1)
  for (var i = 0; i <= maxQ; i++){
    var index = Math.floor(Math.random()*questionList.length);
    if (i < questionList.length){
      while (used.has(index)){
        index = Math.floor(Math.random()*questionList.length);
      }
      used.add(index);
    }
    questions[i] = questionList[index];
  }
}

function startgame(){
  document.getElementById("col").classList.add('slide-out');
  const animation = document.getElementById("col");
  animation.addEventListener("animationend", () => {
    loadgame();
  });
}

async function loadgame() {
  var questionSet = await fetch("https://withercraft303.github.io/hearing_loss/js/questions.txt")
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      questions = data;
  }).catch(err => {
    console.log("no file");
    console.error(err);
  });
questionSet = [
  {
    "object": "siren",
    "image": "img/sirens.jpg",
    "src": "www.istockphoto.com",
    "db": 115
  },
  {
    "object": "jackhammer",
    "image": "img/jackhammer.jpg",
    "src": "www.istockphoto.com",
    "db": 130
  },
  {
    "object": "coffee grinder",
    "image": "img/coffee.png",
    "src": "www.pexels.com",
    "db": 75
  },
  {
    "object": "washing machine",
    "image": "img/not-found.png",
    "src": "",
    "db": 70
  },
  {
    "object": "whisper",
    "image": "img/whisper.jpg",
    "src": "www.123rf.com",
    "db": 30
  }
];

  generateQuestions(questionSet);

  console.log("Animation ended");

  document.getElementById("col").style.visibility = "hidden";
  document.getElementById("game1-display").style.visibility = "visible";
  document.getElementById("game1-controls").style.visibility = "visible";
  document.getElementById("game1-display").classList.add("fade-in-fast");
  document.getElementById("game1-controls").classList.add("fade-in-fast");
  
  document.getElementById("display-object").innerHTML = questions[qIndex]["object"];
  document.getElementById("display-score").innerHTML = "Score: " + score;
  document.getElementById("display-image").src = questions[qIndex]["image"];
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
    document.getElementById("display-image").src = questions[qIndex]["image"];
  } else {
    if (score < 5){
      document.getElementById("display-object").innerHTML = "Good Try!";
    } else if (score < 9){
      document.getElementById("display-object").innerHTML = "Nice!";
    } else if (score = 9){
      document.getElementById("display-object").innerHTML = "So Close!";
    }else if (score = 10){
      document.getElementById("display-object").innerHTML = "Perfect!";
    }
    document.getElementById("display-score").innerHTML = "Score: " + score 
    document.getElementById("display-image").style.visibility = "hidden";
    document.getElementById("display-image").style.height = 0;
    document.getElementById("display-win").style.visibility= "visible";
    document.getElementById("display-win").innerHTML = "Your final score:"  + score + "/" + (maxQ+1);
    document.getElementById("safe").disabled = true;
    document.getElementById("unsafe").disabled = true;
    document.getElementById("dangerous").disabled = true;
    document.getElementById("display-next").style.visibility = "visible";
  }
}