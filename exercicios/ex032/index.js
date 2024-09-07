

let list = [2, 5];
const bckp = list.pop()
for(i = list[0] + 1; i < bckp; i++) {
    list.push(i)
}
list.push(bckp)


console.log(list)