let score = 0;
let aWasPressedBefore = false;
let activeGamepadIndex = null;

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

    let aIsPressedNow = gamepad.buttons[0].pressed;


    console.log('Joystick X:', gamepad.axes[0], 'Joystick Y:', gamepad.axes[1]);

    if (aIsPressedNow && !aWasPressedBefore) {
        score = score + 1;
        let scoreBox = document.getElementById('scoreBox')
        scoreBox.textContent = "Score: " + score;
    }
    if (gamepad.axes[0] < -0.5) {
        console.log('Holding LEFT!');
    }

    if (gamepad.axes[0] > 0.5) {
        console.log('Holding RIGHT!');
    }

    if (gamepad.axes[1] < -0.5) {
        console.log('Holding UP!');
    }


    if (gamepad.axes[1] > 0.5) {
        console.log('Holding DOWN!');
    }

    aWasPressedBefore = aIsPressedNow;

    requestAnimationFrame(loop);
}

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
