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
    event.touches[0]

});
