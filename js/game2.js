function startgame(){
    document.getElementById("col").classList.add('slide-out');
    const animation = document.getElementById("col");
    animation.addEventListener("animationend", () => {
      document.getElementById("col").style.visibility = "hidden";
      loadgame();
    });
  }
  