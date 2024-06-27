const prompt = require ('prompt-sync')();
let Historia = prompt("Digite uma História: ")
let palavra = []
console.log(Historia)

if (Historia.length === 1){ 
     
    palavra.push(Historia)
    console.log(palavra, palavra.length)

}

