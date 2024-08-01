function funcao1(){
    try {
        console.lug(1)
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

function funcao2(){
    asfdf;
}
  
function main() {
    try {
        funcao1()
        funcao2()
    } catch (error) {
        console.log(error.message)
    }
    console.log('executado bro')
}

main()