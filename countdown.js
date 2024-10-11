document.getElementById('startBtn').addEventListener('click', function() {
    let time = parseInt(document.getElementById('timeInput').value);
    const display = document.getElementById('countdownDisplay');

    if (isNaN(time) || time <= 0) {
        display.textContent = "Please enter a valid number.";
        return;
    }

    const countdown = setInterval(() => {
        display.textContent = time + " seconds remaining";

        time--;

        if (time < 0) {
            clearInterval(countdown);
            display.textContent = "Countdown finished!";
        }
    }, 1000);
});
