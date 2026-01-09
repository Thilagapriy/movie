// Check Login Function
function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const loginScreen = document.getElementById('login-screen');
    const videoContainer = document.getElementById('video-container');

    console.log("Login button clicked!"); // This helps you test in the browser console

    if (user === "Dharani" && pass === "dream is upsc") {
        loginScreen.style.display = 'none';
        videoContainer.style.display = 'flex'; // Shows the menu
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// Global Variables
const video = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playPauseBtn');
const controls = document.getElementById('controls-wrapper');
let hideTimer;

// Start Watching Function
function startWatching() {
    const picker = document.getElementById('moviePicker');
    const playerArea = document.getElementById('player-area');
    const menuArea = document.getElementById('menu-area');
    const source = document.getElementById('videoSource');

    source.src = picker.value;
    video.load(); // Vital for scene skipping and changing files
    
    menuArea.style.display = 'none';
    playerArea.style.display = 'block';
    
    video.play();
    showControls();
}

// Controls Logic
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
    if (video.paused) {
        video.play();
        playBtn.innerText = "Pause";
        showControls();
    } else {
        video.pause();
        playBtn.innerText = "Play";
        showControls();
    }
}

function changeTime(seconds) {
    video.currentTime += seconds;
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

// Interaction Listeners
video.addEventListener('mousemove', showControls);
video.addEventListener('touchstart', showControls);
