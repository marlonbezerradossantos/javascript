let i = 0 
while (i <= 100) {
    let tres = Number.isInteger(i / 3)
    let cinco = Number.isInteger(i / 5)
    //console.log(i, tres, cinco)
    if (cinco === true && tres === true) {
        console.log('FizzBuzz')
    } else if (cinco === true) {
        console.log('Buzz')
    } else if (tres === true) {
        console.log('Fizz')
    } else {
        console.log(i)
    }
    i++
}


