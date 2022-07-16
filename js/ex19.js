(function(){

   var imagem = document.querySelector('.ex19-imagem');

   imagem.addEventListener('click', function(){

      if (imagem.getAttribute('src') == 'imagens/lampada.jpg'){
         imagem.setAttribute("src", "imagens/lampada-on.jpg")
      } else {
         imagem.setAttribute("src", "imagens/lampada.jpg")
      }
   })
})()