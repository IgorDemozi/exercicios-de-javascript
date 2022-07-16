(function(){

   var $numerosSalvos = document.querySelector('.ex1-numeros-salvos');
   var $media = document.querySelector('.ex1-media');
   var $input = document.querySelector('.ex1-caixa-de-texto');
   var $botaoSalvar = document.querySelector('.ex1-botao-salvar');
   var $botaoCalcular = document.querySelector('.ex1-botao-calcular');

   var listaDosNumeros = [0];
   var i = 0;
   
   $botaoSalvar.addEventListener('click', salvarNumero);
   $botaoCalcular.addEventListener('click', calcularMedia);


   function salvarNumero(){
      
      $media.textContent = 'Média: ';

      if ($input.value === '' || isNaN($input.value)){
         $input.value = '';
         $input.focus();
         return;
      }

      var n = $input.value;

      listaDosNumeros[i] = n;
      i++;

      $numerosSalvos.textContent += n + ' - ';

      $input.value = '';
      $input.focus();
   }

   function calcularMedia(){

      $media.textContent = 'Média: ';

      soma = 0;

      for (j = 0; j < listaDosNumeros.length; j++) {
         soma = soma + parseInt(listaDosNumeros[j]);
      }

      m = soma/(listaDosNumeros.length);

      $media.textContent += m;
      $numerosSalvos.textContent = 'Números: ';
      $input.value = '';

      listaDosNumeros = [0];
      i = 0;
   }

})()