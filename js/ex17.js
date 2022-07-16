(function(){

   var $input = document.querySelector('.ex17-caixa');
   var $botaoSalvar = document.querySelector('.ex17-botao-salvar');
   var $botaoCalcular = document.querySelector('.ex17-botao-calcular');

   var listaNumeros = [];
   var i = 0;

   $botaoSalvar.addEventListener('click', salvar)
   $botaoCalcular.addEventListener('click', calcular);

   function salvar(){

      if($input.value === ''){
         alert('Digite um número');
         $input.value = '';
         $input.focus();
         return;
      }

      listaNumeros[i] = parseInt($input.value);

      $input.value = '';
      $input.focus();
      i++;

      console.log(listaNumeros);
   }

   function calcular(){

      var soma = 0;

      for (j=0; j<listaNumeros.length; j++){
         if (listaNumeros[j]%2 == 0) soma += listaNumeros[j];
      }

      alert('soma: ' + soma);
   }
})()