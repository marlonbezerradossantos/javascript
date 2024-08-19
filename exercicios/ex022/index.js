// Faça uma função que receba um array contendo pelo menos 3 números inteiros. Este array será composto somente ou de números pares ou números ímpares, exceto por um único que será de um valor oposto ao do resto dos números, retorne este número 

// arrays [2,4,6,8,9,10] [1,2,3,5,7,9,11]

function encontraIntruso(nums) {
    let odds = 0;
    let evens = 0;
    for(n of nums){
        n % 2 === 0 ? evens +=1 : odds += 1;
    }
    if (odds <  evens) {
        for (n of nums) {
            if (n % 2 !== 0) {
                return n
            }
        }
    } else {
        for (n of nums) {
            if (n % 2 === 0) {
                return n
            }
        }
    }
}

console.log(encontraIntruso([1,2,3,5,7,9,11]))