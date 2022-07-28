// function Chutar() {
//   var elementoResultado = document.getElementById("resultado");
//   var chute = parseInt(document.getElementById("valor").value);
//   if (chute == numeroSecreto) {
//     elementoResultado.innerHTML = "Parabéns, você acertou!";
//     //    alert("Parabéns, você acertou!");
//   } else if (chute > 10 || chute < 0) {
//     //    alert("Digite um número de 0 a 10");
//     elementoResultado.innerHTML = "Digite um número de 0 a 10";
//   } else {
//     elementoResultado.innerHTML = "Ops, você errou";
//     //    alert("Ops, você errou");
//   }
//   console.log(chute);
// }
var numeroSecreto = parseInt(Math.random() * 11);
var maximoDeChutes = 3;

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (maximoDeChutes > 0) {
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Que sorte, hein? Acertou na mosca!";
    } else if (chute > 10 || chute < 0) {
      resultado.innerHTML = "Ops, tem que ser um número de 0 a 10";
    } else {
      if (chute > numeroSecreto) {
        resultado.innerHTML = "Desce mais um pouquinho...";
      } else {
        resultado.innerHTML = "Sobe mais um pouquinho...";
      }
    }
  }
  maximoDeChutes--;
  resultado.innerHTML =
    "Suas tentativas acabaram! O número era " + numeroSecreto;
}