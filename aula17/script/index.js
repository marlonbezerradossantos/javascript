const objetos = [];
function meuEscopo() {
    let form = document.querySelector('.form'); 
    function eventoListener (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso'); 

        const resultado = document.querySelector('.resultado');
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${altura.value}, ${peso.value}</p>`;
        
        function criaObjetos (nome, sobrenome, altura, peso) {
            return {
                nome, 
                sobrenome, 
                altura, const lista = ['YA', 'BISH'];
                peso
            }
        };
        objetos.push(criaObjetos(nome.value, sobrenome.value, altura.value, peso.value));
        console.log(objetos);
    };
    form.addEventListener('submit', eventoListener);
}
meuEscopo();