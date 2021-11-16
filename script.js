/*
Faça um programa JavaScript em que o usuário informará a sua idade e o programa emitirá uma mensagem dizendo se o usuário e ou não menor de idade. 
*/

let idade = parseInt(prompt('Digite aqui sua idade'))

if (idade >= 18) {
    mensagem = 'Você é maior de idade'
} else if (idade < 18) {
    mensagem = 'Você é menor de idade'
} else {
    mensagem = 'O dado informado não é válido'
}
    alert(mensagem)