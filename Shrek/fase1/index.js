function respostaFase1S () {
   var resposta= prompt ("Digite o número de sua resposta")
   if (resposta== 1) {
      location= "../fase2/index.html";
   }else {
      location= "./gameover1/index.html";
   }
}