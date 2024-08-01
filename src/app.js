// Usando JavaScript, crea una función que genere y devuelva una excusa aleatoria con la siguiente estructura:
// Para crear una excusa consistente, tienes que concatenar un elemento de cada array o arreglo en el orden correcto.
// Usa la función onload y establece la excusa en el innerHTML del elemento HTML #excuse.
// src/app.js

// Función para generar una excusa aleatoria
function generateExcuse() {
    const excuses = [
        "My dog eat my homework.",
        "I was abducted by aliens.",
        "I lost track of time.",
        "My internet was down.",
        "I had a family emergency."
    ];
    const randomIndex = Math.floor(Math.random() * excuses.length);
    return excuses[randomIndex];
}

// Función para actualizar la excusa en el DOM
function updateExcuse() {
    const excuseElement = document.getElementById('excuse');
    excuseElement.textContent = generateExcuse();
}

// Agregar el evento al botón
document.getElementById('excuse-button').addEventListener('click', updateExcuse);

