(function(){

   var $caixa = document.querySelector('.ex14-caixa');
   var $botao = document.querySelector('.ex14-botao');
   $botao.addEventListener('click', function(){mostrarMensagem($caixa.value)});

   function mostrarMensagem(v){

      var vetor = [1];

      for (i=1; i<v; i++){
         vetor[i] = i+1;
      }
      
      alert(vetor);
   }
})()