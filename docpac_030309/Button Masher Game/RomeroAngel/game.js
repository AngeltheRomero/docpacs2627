let score = 0;
let aWasPressedBefore = false;
let activeGamepadIndex = null;

let directions = ["Up!", "Down!", "Left!", "Right!"]
let requiredDirection = "Up!";



window.addEventListener('gamepadconnected', function (e) {
    console.log('Controller connected!', e.gamepad);
    activeGamepadIndex = e.gamepad.index;
    loop();
});

function loop() {
    let gamepad = navigator.getGamepads()[activeGamepadIndex];

    if (!gamepad) {
        return;
    }

    let isHoldingCorrectDirection = false;

    if (requiredDirection === "Up!") {
        if (gamepad.axes[1] < -0.5) {
            isHoldingCorrectDirection = true;
        }
    }

    if (requiredDirection === "Down!") {
        if (gamepad.axes[1] > 0.5) {
            isHoldingCorrectDirection = true;
        }
    }

    if (requiredDirection === "Left!") {
        if (gamepad.axes[0] < -0.5) {
            isHoldingCorrectDirection = true;
        }
    }

    if (requiredDirection === "Right!") {
        if (gamepad.axes[0] > 0.5) {
            isHoldingCorrectDirection = true;
        }
    }

    let aIsPressedNow = gamepad.buttons[0].pressed;

    console.log('Joystick X:', gamepad.axes[0], 'Joystick Y:', gamepad.axes[1]);

    if (aIsPressedNow && !aWasPressedBefore && isHoldingCorrectDirection && gameisRunning) {
        console.log("Scoring! gameisRunning is:", gameisRunning);
        score = score + 1;
        let scoreBox = document.getElementById('scoreBox')
        scoreBox.textContent = "Score: " + score;
    }

    aWasPressedBefore = aIsPressedNow;

    requestAnimationFrame(loop);
}

let timeLeft = 20;
let gameisRunning = true;

const timerElement = document.getElementById('timeBox');

const countdownInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = "YOUR TIME IS UP!!!!!";
        gameisRunning = false;
        console.log("Game has ended, gameisRunning is:", gameisRunning);
    }
}, 1000);

function changeDirection() {
    let randomIndex = Math.floor(Math.random() * 4);

    let pickedDirection = directions[randomIndex];

    requiredDirection = pickedDirection;

    directionBox.textContent = 'Direction:' + pickedDirection;
}

setInterval(changeDirection, 2000);