function toggleAudio(event) {
    var audio = document.getElementById('audioPlayer');
    var button = event.target;

    if (audio.paused) {
        audio.play();
        button.src = "images/webbutton_pause.jpg"; 
    } else {
        audio.pause();
        button.src = "images/webbutton_play.jpg"; 
    }
}
