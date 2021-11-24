function respostaFase3F() {
   var resposta= prompt ("Digite o número de sua resposta");
   if (resposta == 2) {
      location= "./winF/index.html";
   }else {
      location= "./gameOver3/index.html";
   }
}