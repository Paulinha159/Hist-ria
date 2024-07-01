const prompt = require ('prompt-sync')();
let Historia = prompt("Digite uma História: ").trim().replaceAll(",",".").split()

//console.log(`Existem ${Historia.lenght} palavras nesta história: ` )

Historia.forEach(function(palavra){
    if(ocorrencias[palavras]){
        ocorrencias[palavras]++
    }else { 
        ocorrencia[palavra]=1

    }
});
let palavras = Object.entries(ocorrencias)
let maiorOcorrencia = palavras[0]
for(let palavra of palavras)
    console.log(palavra)
    if(palavra[1]> maiorOcorrencia[1])
        maiorOcorrencia=palavra
    console.log ("A palavra que aparece mais vezes é:"+ maiorOcorrencia)
    



