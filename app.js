alert('Boas-vindas ao meu jogo do número secreto!');
let numeroSecreto  = 31; 
console.log (numeroSecreto);
let tentativa = prompt('Digite um número entre 1 e 50');
// oioioioioi
if (tentativa == numeroSecreto) {
    alert(`Parabéns! Você adivinhou o número secreto! Era: ${numeroSecreto}`);
    console.log(`Parabéns! Você adivinhou o número secreto! Era: ${numeroSecreto}`);

}
else {
    alert('Você errou! Tente outro número!')
}
