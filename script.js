const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputsValues);

// function sumarInputsValues (event) {
//     console.log({event});
//     event.preventDefault();
//     const suma = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado: " + suma;
// }


btn.addEventListener('click', sumarInputsValues);

function sumarInputsValues (event) {
    // console.log({event});
    // event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + suma;
}
