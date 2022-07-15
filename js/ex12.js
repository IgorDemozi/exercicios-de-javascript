(function(){

   var $caixa = document.querySelector('.ex12-caixa');
   var $botao = document.querySelector('.ex12-botao');
   $botao.addEventListener('click', mostrarMensagem);

   function mostrarMensagem(){

      a = $caixa.value;

      if (a >= 0 && a < 10){
         alert('Insuficiente');
      }

      if (a >= 10 && a < 14){
         alert('Bom');
      }

      if (a >= 14){
         alert('Muito bom');
      }
   }
})()