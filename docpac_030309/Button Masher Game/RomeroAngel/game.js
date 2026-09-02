let timeLeft = 20;

const timerElement = document.getElementById('timeBox');

const countdownInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = "YOUR TIME IS UP!!!!!";
    }
}, 1000);

let currentScore = 0;

const scoreBox = document.getElementById("scoreBox")
function changeScore(amount) {
    currentScore += amount;
}

window.addEventListener('gamepadconnected', function (e) {
    console.log('Controller connected!', e.gamepad);
});

function loop() {
    let gamepad = navigator.getGamepads()[activeGamepadIndex]
}

