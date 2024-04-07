document.getElementById("scrollToVideoBtn").addEventListener("click", function() {
    var videoContainer = document.querySelector(".video-container");
    videoContainer.scrollIntoView({ behavior: 'smooth' });
});
