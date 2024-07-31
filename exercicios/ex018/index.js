const num = 200;
try {
   //if(num > 5) throw 'Maior que 5'
   if (!isNaN(num)) {
    throw new Error('tem q ser maior q 5');
   }
} catch(err) {
    console.log(err)
   
}
