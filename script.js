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
function startWatching() {
    const picker = document.getElementById('moviePicker');
    const playerArea = document.getElementById('player-area');
    const menuArea = document.getElementById('menu-area');
    const video = document.getElementById('videoPlayer');
    const source = document.getElementById('videoSource');

    // 1. Load selected link
    source.src = picker.value;
    video.load(); 
    
    // 2. UI Transitions
    menuArea.style.display = 'none';
    playerArea.style.display = 'block';
    
    // 3. Play
    video.play();
    showControls(); // Triggers the 3-second auto-hide timer
}
