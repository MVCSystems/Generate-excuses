
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// Usando JavaScript, crea una función que genere y devuelva una excusa aleatoria con la siguiente estructura:
// Para crear una excusa consistente, tienes que concatenar un elemento de cada array o arreglo en el orden correcto.
// Usa la función onload y establece la excusa en el innerHTML del elemento HTML #excuse.
// src/app.js

// Función para generar una excusa aleatoria
// function generateExcuse() {
//     const excuses = [
//         { text: "My dog eat my homework yesterday.", image: "../src/assets/img/img_excuse_1.png" },
//         { text: "I was abducted by aliens.", image: "../src/assets/img/img_excuse_2.png" },
//         { text: "I lost my keys.", image: "../src/assets/img/img_excuse_3.png" },
//         { text: "My car broke down.", image: "../src/assets/img/img_excuse_4.png" },
//         { text: "I overslept.", image: "../src/assets/img/img_excuse_5.png" }
//     ];
//     const randomIndex = Math.floor(Math.random() * excuses.length);
//     return excuses[randomIndex];
// }

// // Función para actualizar la excusa en el DOM
// function updateExcuse() {
//     const randomExcuse = generateExcuse();
//     document.getElementById('excuse').textContent = randomExcuse.text;
//     document.getElementById('excuse-image').src = randomExcuse.image;
// }

// // Agregar el evento al botón
// document.getElementById('excuse-button').addEventListener('click', updateExcuse);



// app.js
document.addEventListener('DOMContentLoaded', () => {
    const excuseButton = document.getElementById('excuse-button');
    const excuseText = document.getElementById('excuse');
    const excuseImage = document.getElementById('excuse-image'); // Asegúrate de tener un elemento de imagen con este ID
    const excuses = [
        { text: "My dog ate my homework yesterday.", image: "../src/assets/img/img_excuse_1.png" },
        { text: "I was abducted by aliens.", image: "../src/assets/img/img_excuse_2.png" },
        { text: "I lost my keys.", image: "../src/assets/img/img_excuse_3.png" },
        { text: "My car broke down.", image: "../src/assets/img/img_excuse_4.png" },
        { text: "I overslept.", image: "../src/assets/img/img_excuse_5.png" }
    ];

    excuseButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * excuses.length);
        excuseText.textContent = excuses[randomIndex].text;
        excuseImage.src = excuses[randomIndex].image; // Actualiza la imagen
    });
});