document.addEventListener('DOMContentLoaded', function() {
    const blinkElements = document.querySelectorAll('blink');
    blinkElements.forEach(el => {
        el.classList.add('blink');
    });

    // Random visitor counter (very authentic!)
    const counter = document.querySelector('.visitor-counter');
    if (counter) {
        const randomVisitors = Math.floor(Math.random() * 9999) + 1000;
        counter.textContent = randomVisitors.toString();
    }

    // Classic alert on page load (optional)
    // setTimeout(() => {
    //     alert('Welcome to my homepage! Please sign my guestbook!');
    // }, 1000);
});
