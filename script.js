function togglePlayPause() {
    var video = document.getElementById("myVideo");
    var button = document.getElementById("playPauseBtn");

    if (video.paused || video.ended) {
        video.play();
        button.innerHTML = "Pause";
    } else {
        video.pause();
        button.innerHTML = "Play";
    }
}
