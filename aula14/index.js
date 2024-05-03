const nomes = ['Marlon', 'João', 'Geane', 'José'];
nomes[2] = 'Mãe';
nomes[4] = 'Lenita';
nomes.push(27)
nomes.unshift('01')
nomes.pop();
nomes.shift()
delete nomes[2];
const sliced = nomes.slice(0, 2)
console.log(sliced);
console.log(nomes);
