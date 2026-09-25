const touchArea = document.getElementById('touchArea');
const player = document.getElementById('player');
const touchStatus = document.getElementById('touchStatus');


let touchActive = false;
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let deltaX = 0;
let deltaY = 0;

const SWIPE_DISTANCE = 25;
const TAP_TOLERANCE = 12;
const PLAYER_WIDTH = 100;
const PLAYER_HEIGHT = 100;

touchArea.addEventListener('touchstart', (event) => {
    const touch = event.touches[0]
    event.preventDefault();
    const rect = touchArea.getBoundingClientRect();
    console.log(rect);
    touchStatus.textContent = "Viewport X: " + touch.clientX + " | Viewport Y: " + touch.clientY + " | Local X: " + currentX + " | Local Y: " + currentY;

    startX = touch.clientX;
    startY = touch.clientY;
    currentX = touch.clientX;
    currentY = touch.clientY;
    touchActive = true;

    const localX = touch.clientX - rect.left;
    const localY = touch.clientY - rect.top;
});
