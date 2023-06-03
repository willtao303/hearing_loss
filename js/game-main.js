function setup(){
    document.getElementById("game1-button").addEventListener('click', function(event){
        var content = document.getElementById('choosegame'),
            anchor = event.currentTarget;
        var listener = function() {
            window.location = anchor.href;
            content.removeEventListener('animationend', listener);
        }
        content.addEventListener('animationend', listener);
        event.preventDefault();
        content.classList.add('fade-out');
    });
}