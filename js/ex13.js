(function(){

   var $caixa = document.querySelector('.ex13-caixa');
   var $botao = document.querySelector('.ex13-botao');
   $botao.addEventListener('click', function(){mostrarMensagem($caixa.value)});

   function mostrarMensagem(v){
      alert('AIA ' + v);
   }
})()