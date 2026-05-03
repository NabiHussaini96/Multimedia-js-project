// Hämta elementen
const audio = document.getElementById("audioPlayer");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Rita första cirkeln
let currentColor = "blue";

function drawCircle(color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(150, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// Start
drawCircle(currentColor);

// MEDIA CONTROLS
function playMedia() {
    audio.play();
}

function pauseMedia() {
    audio.pause();
}

function changeVolume(value) {
    audio.volume = value;
}

// CANVAS FÄRG BYTE
function changeColor() {
    const colors = ["blue", "red", "green", "purple", "orange"];
    currentColor = colors[Math.floor(Math.random() * colors.length)];
    drawCircle(currentColor);
}