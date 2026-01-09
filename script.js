const video = document.getElementById('videoPlayer');
const controls = document.getElementById('controls-wrapper');
const seekBar = document.getElementById('seekBar');
const currentTimeLabel = document.getElementById('current-time');
const durationLabel = document.getElementById('duration-time');
let hideTimer;

// Login
function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === "Dharani" && pass === "duke1234") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('video-container').style.display = 'flex';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// Start Movie
function startWatching() {
    const picker = document.getElementById('moviePicker');
    const source = document.getElementById('videoSource');
    source.src = picker.value;
    video.load();
    document.getElementById('menu-area').style.display = 'none';
    document.getElementById('player-area').style.display = 'flex';
    video.play();
    showControls();
}

// Zoom Toggle
let isZoomed = false;
function toggleZoom() {
    isZoomed = !isZoomed;
    const btn = document.querySelector('.zoom-btn');
    if (isZoomed) {
        video.classList.add('zoomed');
        btn.innerText = "🔍 Zoom: Fill";
    } else {
        video.classList.remove('zoomed');
        btn.innerText = "🔍 Zoom: Fit";
    }
}

// Time Formatting
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Seek Bar Sync
video.addEventListener('timeupdate', () => {
    const value = (video.currentTime / video.duration) * 100;
    seekBar.value = value || 0;
    currentTimeLabel.innerText = formatTime(video.currentTime);
});

video.addEventListener('loadedmetadata', () => {
    durationLabel.innerText = formatTime(video.duration);
});

seekBar.addEventListener('input', () => {
    video.currentTime = (seekBar.value / 100) * video.duration;
});

// Controls Logic
function showControls() {
    controls.classList.remove('hidden');
    clearTimeout(hideTimer);
    if (!video.paused) {
        hideTimer = setTimeout(() => controls.classList.add('hidden'), 3000);
    }
}

function togglePlay() {
    const btn = document.getElementById('playPauseBtn');
    if (video.paused) { video.play(); btn.innerText = "Pause"; }
    else { video.pause(); btn.innerText = "Play"; }
    showControls();
}

function changeTime(secs) { video.currentTime += secs; showControls(); }

function toggleFullScreen() {
    const container = document.getElementById('video-container');
    if (!document.fullscreenElement) container.requestFullscreen?.() || container.webkitRequestFullscreen?.();
    else document.exitFullscreen();
}

video.addEventListener('mousemove', showControls);
video.addEventListener('touchstart', showControls);
