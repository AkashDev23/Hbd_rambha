
function timeElapse(startDate) {
    function update() {
        const now = new Date();
        let seconds = Math.floor((now - startDate) / 1000);

        const days = Math.floor(seconds / (3600 * 24));
        seconds %= 3600 * 24;

        const hours = Math.floor(seconds / 3600);
        seconds %= 3600;

        const minutes = Math.floor(seconds / 60);
        seconds %= 60;

        const timeStr = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

        const el = document.getElementById("loveTime");
        if (el) el.innerText = timeStr;
    }

    update();
    setInterval(update, 1000); // Repeat every second
}
