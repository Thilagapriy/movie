// 1. Safety Login Method
function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Set your Username and Password here
    if (user === "Dharani" && pass === "dream is upsc") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

const video = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playPauseBtn');
const container = document.getElementById('video-container');

function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.innerText = "Pause";
    } else {
        video.pause();
        playBtn.innerText = "Play";
    }
}

function changeTime(seconds) {
    video.currentTime += seconds;
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) { // Safari
            container.webkitRequestFullscreen();
        }
    } else {
        document.exitFullscreen();
    }
}
