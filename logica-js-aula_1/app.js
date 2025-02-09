alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt( (Math.random() *numeroMaximo) + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1; 
// Enquanto o chute for diferente do número secreto, o jogo continua
while(chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e ' + numeroMaximo);
    if (chute == numeroSecreto) {
    break;
     } else  {
          if(chute > numeroSecreto) {
            alert(' Você Errou! ' + 'O número secreto é menor que ' + chute);
          }  else{
            alert(' Você Errou! ' + 'O número secreto é maior que ' + chute);
     }
    // tentativas = tentativas + 1;
    tentativas++;
    }
}
let palavraTentativas = tentativas > 1? ' tentativas' : ' tentativa';
alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto +  ' com ' + tentativas +  palavraTentativas + '.');  
//if(tentativas > 1) {  
//  alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto + " com " + tentativas + ' tentativas.');
//} else {
//  alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto + " com " + tentativas + ' tentativa.');
//}

alert ('Semana Feliz!');
 let diaSemana = prompt ('Digite o dia da semana');
if (diaSemana == 'Sábado'|| diaSemana =='sabado'|| diaSemana =='sábado'|| diaSemana =='Domingo')
{  alert('Bom Final de Semana!');} else {
     alert('Boa Semana!')}

alert('Contagem Regressiva');   
let contadorR = prompt(' Digite o número de ínicio da regressiva'); 
alert('Vamos começar a contagem regressiva ' + contadorR);
while(contadorR != 0) {
     contadorR--;
    alert(contadorR);
}

alert('Contagem Progressiva');   
let contadorP = 0
let contadorPF = prompt('Digite o número final da contagem Progressiva'); 
alert('Vamos começar a contagem Progressiva até ' + contadorPF);
alert(contadorP);
while(contadorP != contadorPF) {
     contadorP++;
    alert(contadorP);
}

