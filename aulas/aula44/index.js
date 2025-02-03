"use strict"
//callback functions

function executa(cb) {
    console.log("executa a callback function")
    cb()
}

executa(function(){
    console.log("Hello World!")
})