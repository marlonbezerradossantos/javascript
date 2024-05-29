const send = document.querySelector(".input-send"); 

send.addEventListener("click", function(event) { //anotar isso!!
    event.preventDefault(event);
    
    const peso = document.querySelector(".peso");
    const altura = document.querySelector(".altura");
    const imc = Number(peso.value/ (altura.value * altura.value)).toFixed(1);
    const resultado = document.querySelector(".resultado");
    console.log(imc, peso.value, altura.value)

    if (peso.value === NaN || peso.value === undefined || peso.value === 0) {
        resultado.innerHTML = `<p>Peso inválido</p>`;
    } else if (altura.value === NaN || altura.value === undefined || altura.value === 0) {
        resultado.innerHTML = `<p>Altura inválida</p>`;
    } else if (imc < 18.5) {
        resultado.innerHTML = `<p style="padding: 2%"; >Seu IMC é de ${imc} (Abaixo do peso)</p>` ;
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = `<p style="padding: 2%;" >Seu IMC é de ${imc} (Peso normal)</p>`;
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `<p style="padding: 2%;" >Seu IMC é de ${imc} (Sobrepeso)</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `<p style="padding: 2%;" >Seu IMC é de ${imc} (Obesidade grau 1)</p>`;
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `<p style="padding: 2%;" >Seu IMC é de ${imc} (Obesidade grau 2)</p>`;
    } else if (imc > 40) {
        resultado.innerHTML = `<p style="padding: 2%;" >Seu IMC é de ${imc} (Obesidade grau 3)</p>`;
    }
})
