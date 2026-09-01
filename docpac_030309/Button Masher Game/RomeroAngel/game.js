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