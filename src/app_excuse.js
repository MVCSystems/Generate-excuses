
// Usando JavaScript, crea una función que genere y devuelva una excusa aleatoria con la siguiente estructura:
// Para crear una excusa consistente, tienes que concatenar un elemento de cada array o arreglo en el orden correcto.
// Usa la función onload y establece la excusa en el innerHTML del elemento HTML #excuse.
// src/app.js

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generateExcuse() {
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    let excuse = `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
    return excuse;
}

window.onload = function() {
    document.getElementById('excuse').innerHTML = generateExcuse();
    document.getElementById('excuse-button').addEventListener('click', function() {
        document.getElementById('excuse').innerHTML = generateExcuse();
    });
};

