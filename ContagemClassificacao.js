//1- se o numero for par, escreva 'par' e o número correspondente.
//2- se o número for impar, escreva 'impar'e o número correspondente
//2 - se o numero for zero, escreva 'zero' e o numero correspondente

// % divide pelo numeromas nao carrega resultado só o resto(resto seria os numeros quebrados da conta, com valor 0 é par, com valor quebrado é impar)
let numeroDeAlunos = 10;

for(let contador=0; contador <numeroDeAlunos; contador++){
    console.log(contador)
    if(contador == 0){
        console.log('classificado o zero')
    }
    if(contador % 2 == 0){
        console.log('numero par')
    }else{
        console.log('numero imopar')
    }
}