function respostaFase1() {
   var resposta = prompt ("Digite o número da sua resposta");
   if (resposta == 2) {
      location= "../fase2/index.html";

   }else {
      location= "./gameOver1/index.html";
   }
}
