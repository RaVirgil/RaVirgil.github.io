let yesBtn = document.querySelector('.yes-btn');
let sizeMultiplier = 1.2;

function increaseYesSize() {
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * sizeMultiplier) + "px";
    yesBtn.style.padding = (parseFloat(window.getComputedStyle(yesBtn).padding) * sizeMultiplier) + "px";
}

function acceptProposal() {
    document.body.innerHTML = `
        <div style="position: fixed; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; background-color: #ffccff;">
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTlyODBzZjBjbXBpNjdoZjQ5aTFjMHRrbGN5bzh1ZHJxN3F1cGV4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BNOsTxnlHkgMzDAHgO/giphy.gif" alt="Happy Valentine" style="max-width: 80%; border-radius: 10px;">
            <h1 style="color: #ff3366;">Yay! Happy Valentine's Day ❤️ Love you 3000</h1>
        </div>
    `;
    startConfetti();
}

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.position = "absolute";
        confetti.style.top = "-10px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.opacity = Math.random();
        confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";
        document.body.appendChild(confetti);

        let animation = confetti.animate([
            { transform: "translateY(0)" },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)` }
        ], {
            duration: Math.random() * 3000 + 2000,
            iterations: 1
        });

        animation.onfinish = () => confetti.remove();
    }
}

function getRandomColor() {
    const colors = ["#ff0000", "#ff6600", "#ffcc00", "#66ff66", "#0066ff", "#cc00ff"];
    return colors[Math.floor(Math.random() * colors.length)];
}
