const send = document.querySelector(".input-send"); 

send.addEventListener("click", function(event) { //anotar isso!!
    event.preventDefault(event);
    
    const form = document.querySelector("form");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura")
    const imc = Number(peso.value/ (altura.value * altura.value)).toFixed(2);
    console.log(peso.value, altura.value, imc);

})



 




