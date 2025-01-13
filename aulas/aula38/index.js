const pessoas = [
    {
        nome: "Marlon",
        idade: 20
    },
    {
        nome: "João",
        idade: 19
    },
    {
        nome: "José",
        idade: 52
    },
    {
        nome: "Geane",
        idade: 39
    }
]

for(c in pessoas){
    console.log(`Olá, meu nome é ${pessoas[c].nome} e tenho ${pessoas[c].idade} anos`)
}