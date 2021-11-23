function respostaFase2 () {
   var resposta = prompt ("Digite o número da sua resposta")
   if (resposta == 2) {
      location= "../fase3/f3.html"
   }else {
      location="./goF2.html"
   }
}

function voltarGo2 () {
   location="./f2.html"
}