///uso do set interval

console.log('Antes da execução')
let i = 0;
const timer = setInterval(function(){
    i++
    console.log(i)
    
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 11000)

// uso do set timeout 

let x = 0;
const timeout = setTimeout(function(){
    console.log('Olá mundo!')
}, 10000)

x = 5;

if(x > 1){
    console.log('Acabou a graça')
    clearTimeout(timeout)
}



