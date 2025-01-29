let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value); // Convertir a número
    const feedback = document.getElementById('feedback');
    attempts++;

    if (userGuess < secretNumber) {
        feedback.innerHTML = `No, mi número es <span class="mayor">mayor</span>.`;
    } else if (userGuess > secretNumber) {
        feedback.innerHTML = `No, mi número es <span class="menor">menor</span>.`;
    } else {
        feedback.innerHTML = `🎉 ¡Acertaste! Y solo utilizaste <strong>${attempts}</strong> intentos.`;
        document.getElementById('userGuess').disabled = true;
    }
}
