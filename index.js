function executaPrograma() {
    const submit = document.querySelector('button');

    function executaLogica(event) {
        event.preventDefault();

        const peso = document.querySelector('form .peso').value;
        const altura = document.querySelector('form .altura').value;
        const calculoImc = peso / (altura * altura);
        const resultado = document.querySelector('.resultado');

        if (calculoImc < 18.5) {
            resultado.classList.remove('desativado');
            resultado.classList.add('ativado');
            resultado.innerHTML = `IMC: ${calculoImc.toFixed(2)} <span>(Abaixo do peso)</span>`;
        } else if (calculoImc >= 18.5 && calculoImc <= 24.99) {
            resultado.classList.remove('desativado');
            resultado.classList.add('ativado');
            resultado.innerHTML = `IMC: ${calculoImc.toFixed(2)} <span>(Peso normal)</span>`;
        } else if (calculoImc >= 25 && calculoImc <= 29.99) {
            resultado.classList.remove('desativado');
            resultado.classList.add('ativado');
            resultado.innerHTML = `IMC: ${calculoImc.toFixed(2)} (Sobrepeso)`;
        } else if (calculoImc >= 30 && calculoImc <= 34.99) {
            resultado.classList.remove('desativado');
            resultado.classList.add('ativado');
            resultado.innerHTML = `IMC: ${calculoImc.toFixed(2)} (Obesidade grau 1)`;
        } else if (calculoImc >= 35 && calculoImc <= 39.99) {
            resultado.classList.remove('desativado');
            resultado.classList.add('ativado');
            resultado.innerHTML = `IMC: ${calculoImc.toFixed(2)} (Obesidade grau 2)`;
        } else {
            resultado.classList.remove('desativado');
            resultado.classList.add('ativado');
            resultado.innerHTML = `IMC: ${calculoImc.toFixed(2)} (Obesidade grau 3)`;
        }
    }

    submit.addEventListener('click', executaLogica);

}

executaPrograma();