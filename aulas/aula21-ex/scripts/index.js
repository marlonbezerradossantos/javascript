const send = document.querySelector(".input-send"); 
send.addEventListener("click", function(event) {
    event.preventDefault(event);
    let peso = document.querySelector(".peso");
    peso = Number(peso.value)
    console.log(peso, typeof(peso))
    let altura = document.querySelector(".altura");
    altura = Number(altura.value);
    console.log(altura, typeof(altura))
    const resultado = document.querySelector(".resultado");
    if (peso === 0) {
        resultado.innerHTML = `<p style="padding: 2%; background-color: rgba(255, 0, 0, 0.568); border: 2px solid black;">Peso inválido!</p>`
    } else if (altura === 0) {
        resultado.innerHTML = `<p style="padding: 2%; background-color: rgba(255, 0, 0, 0.568); border: 2px solid black;">Altura inválida!</p>`
    } else {
        const imc = (peso / (altura * altura)).toFixed(2);
        if (imc < 18.5) {
            resultado.innerHTML = `<p style="padding: 2%; border: 2px solid black;" >Seu IMC é de <strong>${imc}</strong> (Abaixo do peso)</p>`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p style="padding: 2%; border: 2px solid black;" >Seu IMC é de <strong>${imc}</strong> (Peso normal)</p>`;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p style="padding: 2%; border: 2px solid black;" >Seu IMC é de <strong>${imc}</strong> (Sobrepeso)</p>`;
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `<p style="padding: 2%; border: 2px solid black;" >Seu IMC é de <strong>${imc}</strong> (Obesidade grau 1)</p>`;
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `<p style="padding: 2%; border: 2px solid black;" >Seu IMC é de <strong>${imc}</strong> (Obesidade grau 2)</p>`;
        } else if (imc > 40) {
            resultado.innerHTML = `<p style="padding: 2%; border: 2px solid black;" >Seu IMC é de <strong>${imc}</strong> (Obesidade grau 3)</p>`;
        }
    }
})
