function setup(){
  document.getElementById("wrapper").addEventListener('click', function(event){
    var fader = document.getElementById('fader'),
      anchor = event.currentTarget;
    var listener = function() {
      window.location = anchor.href;
      fader.removeEventListener('animationend', listener);
    }
    fader.addEventListener('animationend', listener);
    event.preventDefault();
    fader.classList.add('fade-in');
  });
}