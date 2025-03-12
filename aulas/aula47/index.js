"use strict"

const arr = [1, 10, 35, 47, 59, 70, 80]
console.log(arr.findIndex(function(el) {
    return el > 50
}));