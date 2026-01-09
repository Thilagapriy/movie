const video = document.getElementById('videoPlayer');
const controls = document.getElementById('controls-wrapper');
let hideTimer;

// Login Logic
function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === "amma" && pass === "1234") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('video-container').style.display = 'flex';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// Start Streaming
function startWatching() {
    const picker = document.getElementById('moviePicker');
    const source = document.getElementById('videoSource');
    
    source.src = picker.value;
    video.load(); // Vital for direct streaming
    
    document.getElementById('menu-area').style.display = 'none';
    document.getElementById('player-area').style.display = 'flex';
    
    video.play();
    showControls();
}

// UI Interaction
function showControls() {
    controls.classList.remove('hidden');
    clearTimeout(hideTimer);
    if (!video.paused) {
        hideTimer = setTimeout(() => {
            controls.classList.add('hidden');
        }, 3000);
    }
}

function togglePlay() {
    const btn = document.getElementById('playPauseBtn');
    if (video.paused) {
        video.play();
        btn.innerText = "Pause";
        showControls();
    } else {
        video.pause();
        btn.innerText = "Play";
        showControls();
    }
}

function changeTime(secs) {
    video.currentTime += secs;
    showControls();
}

function toggleFullScreen() {
    const container = document.getElementById('video-container');
    if (!document.fullscreenElement) {
        container.requestFullscreen?.() || container.webkitRequestFullscreen?.();
    } else {
        document.exitFullscreen();
    }
}

// Listeners
video.addEventListener('mousemove', showControls);
video.addEventListener('touchstart', showControls);
