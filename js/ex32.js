(function(){

   $numero = document.querySelector('.ex32-caixa');
   $botao = document.querySelector('.ex32-botao');

   $botao.addEventListener('click', function(){

      if ($numero.value == 7){
         alert('acertou');
      } else {
         alert('errou');
      }
   })
})()