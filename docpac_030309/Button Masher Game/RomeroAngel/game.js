let timer = document.getElementById("timeBox")

function timer() {
    timeLeft--;
    timer.innerText = timeLeft;
    document.getElementById("timeBox")
    if (timeLeft === 0) { }
}