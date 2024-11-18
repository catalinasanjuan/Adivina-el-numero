let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    attempts++;
    if (userGuess < secretNumber) {
        document.getElementById('feedback').textContent = 'No, mi número es mayor.';
    } else if (userGuess > secretNumber) {
        document.getElementById('feedback').textContent = 'No, mi número es menor.';
    } else {
        document.getElementById('feedback').textContent = `¡Acertaste! Y solo utilizaste ${attempts} intentos.`;
        document.getElementById('userGuess').disabled = true;
    }
}
