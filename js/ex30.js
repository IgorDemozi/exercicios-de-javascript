(function(){

   var $texto = document.querySelector('.ex30-caixa');
   var $botao = document.querySelector('.ex30-botao');

   $botao.addEventListener('click', function(){

      var texto = $texto.value;
      var cont = 0;
      var index = texto.indexOf('assim');

      while (index != -1){
         cont++;
         index = texto.indexOf('assim', index + 1);
      }

      if (texto.indexOf('assim') < 0){
         alert('Nenhuma ocorrência');
      } else {
         alert('Existem ' + cont + ' ocorrências');
      }

   })

})()