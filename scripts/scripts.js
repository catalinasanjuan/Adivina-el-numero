let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const feedback = document.getElementById('feedback');

    // Validar si el número está en el rango permitido
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "⚠️ Por favor, ingresa un número entre 1 y 100.";
        feedback.style.color = "#d9534f"; // Rojo para errores
        return; // Detener la ejecución si el número es inválido
    }

    // Incrementar intentos solo si el número es válido
    attempts++;

    // Verificar si el número es mayor, menor o correcto
    if (userGuess < secretNumber) {
        feedback.textContent = "No, mi número es mayor.";
        feedback.style.color = "#d9534f"; // Rojo
    } else if (userGuess > secretNumber) {
        feedback.textContent = "No, mi número es menor.";
        feedback.style.color = "#007bff"; // Azul
    } else {
        feedback.textContent = `🎉 ¡Acertaste! Y solo utilizaste ${attempts} intentos.`;
        feedback.style.color = "#28a745"; // Verde para éxito
        document.getElementById('userGuess').disabled = true;
    }
}
