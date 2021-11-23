function respostaFase3() {
   var resposta = prompt ("Digite aqui o número da sua resposta")
   if (resposta == 1) {
      location= "./winH.html";
   }else {
      location= "./goF3.html";
   }
}

function voltarGo2() {
   location= "./f3.html";
}

function escolhaOutroPersonagem() {
   location="../../paginaPersonagens/index.html"
}