function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Update digital clock
    const digitalClock = document.getElementById('digitalClock');
    digitalClock.textContent = now.toLocaleTimeString();

    // Update analog clock
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    const secondsDeg = (seconds / 60) * 360 + 90; // Adding 90 degrees to start at 12 o'clock
    const minutesDeg = (minutes / 60) * 360 + 90;
    const hoursDeg = (hours % 12 / 12) * 360 + (minutes / 60) * 30 + 90;

    secondHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initialize clock immediately
