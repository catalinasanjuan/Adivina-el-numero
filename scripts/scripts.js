function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const feedback = document.getElementById('feedback');

    // Validar si el número está en el rango permitido
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.innerHTML = `<span class="error">⚠️ Por favor, ingresa un número entre 1 y 100.</span>`;
        return; // Detener la ejecución si el número es inválido
    }

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
