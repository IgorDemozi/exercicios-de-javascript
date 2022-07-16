(function(){

   var imagem = document.querySelector('.ex20-imagem');

   imagem.addEventListener('mouseenter', function(){
      imagem.setAttribute("src", "imagens/lampada-on.jpg")
   })

   imagem.addEventListener('mouseleave', function(){
      imagem.setAttribute("src", "imagens/lampada.jpg")
   })
})()