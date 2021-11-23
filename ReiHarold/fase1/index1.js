function respostaFase1() {
   var resposta = prompt ("Digite o número da sua resposta");
   if (resposta == 2) {
      location= "../fase2/f2.html"

   }else {
      location= "./goF1.html"
   }
}

function voltarGo1() {
   location= "./f1.html"
}